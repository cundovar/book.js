import React, { useState } from "react";
import UseFetch from "../../utils/useFech";
import SousCategorieDiv from "./sousCategorieDiv";

const MainNav = () => {
    const jsonUrl = "/json/jsonNav.json";
    const { data: dataNav, error: errorNav } = UseFetch(jsonUrl);
    const [ishover, setIsHover] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    // const categories = Object.keys(dataNav);
     // Récupérer les noms de catégories depuis le JSON
     console.log(dataNav)
     if(errorNav){
         console.log("erreur",errorNav)
     }
     const categories = dataNav ? Object.keys(dataNav) : [];
   

     
    const handleMouseEnter = (category) => {
        setIsHover(true);
        setSelectedItem(dataNav[category]);
    };

    return (
        <>
        <div className="fixed top-0 w-full items-center justify-center flex h-20 space-x-10 border">
            <div>logo</div>
            <div>qui somme nous ?</div>
            <div>donner ou revendre des livres</div>
            <div>barre de recherche</div>
            <div className="flex items-center justify-center space-x-5">
           <div>aide</div>
           <div>connexion</div>
           <div>panier</div>
            </div>
        </div>
        
        <div className="w-full bg-gray-400 h-full  ">

        <div className={`w-full mt-20 z-5 flex h-full fixed left-0 border ${ishover ? "z-50":""} `}>
            <div className="w-3/12 ">
                <ul>
                    {categories.map((category, idx) => (
                        <li
                            key={idx}
                            className="border p-3 cursor-pointer hover:border-l-orange-600"
                            onMouseEnter={() => handleMouseEnter(category)}
                        >
                             {dataNav[category].nav}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`w-7/12 h-full ${ishover ? 'bg-pink-300 z-50 ' : 'z-0 hidden'}`} onMouseLeave={() => setIsHover(false)}>
                <div className="border-b p-5">
                    <p>Tous les ouvrages</p>
                </div>
            {selectedItem && (
    <>
        {Object.keys(selectedItem).map((div, idx) => (
            <div key={idx}>
                <h3 className="text-xl ">{selectedItem[div].titre}</h3>
                <div className="flex w-full border-b p-5">
                   <SousCategorieDiv selectedItem={selectedItem} div={div} ul="ul0"/>
                   <SousCategorieDiv selectedItem={selectedItem} div={div} ul="ul1"/>
                   <SousCategorieDiv selectedItem={selectedItem} div={div} ul="ul2"/>
                   
                  
                </div>
              
              
          
            </div>
        ))}
    </>
)}
            </div>
            <div className={`w-2/12 h-full bg-black opacity-40  ${ishover ? '' : 'z-0 hidden'}`}>

            </div>
        </div>
        </div>
        </>
    );
};

export default MainNav;
