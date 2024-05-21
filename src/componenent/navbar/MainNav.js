import React, { useEffect, useState } from "react";
import UseFetch from "../../utils/useFech";
import SousCategorieDiv from "./sousCategorieDiv";
import { ButtonGreen, ButtonOrange } from "../common/buttons";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from "react-router-dom";
const MainNav = () => {
  const jsonUrl = "/json/jsonNav.json";
  const { data: dataNav, error: errorNav } = UseFetch(jsonUrl);
  const [ishover, setIsHover] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const categories = Object.keys(dataNav);
  // Récupérer les noms de catégories depuis le JSON
  console.log(dataNav);
  if (errorNav) {
    console.log("erreur", errorNav);
  }
  const categories = dataNav ? Object.keys(dataNav) : [];
  const dataLi = ["Aide", "recyclage Pro", "Nos engagements", "Le blog"];

  const handleMouseEnter = (category) => {
    setIsHover(true);
    setSelectedItem(dataNav[category]);
  };
  console.log("selectedItem:", selectedItem);

  

  return (
    <>
    <header className="fixed w-full mt-0 bg-slate-50 z-50 h-20">

      <div className="position-relative h-full d-flex align-items-start align-items-xl-center justify-content-between px-4 px-xl-8 py-5 py-xl-0 flex-wrap flex-xl-nowrap">
        <div className="flex w-2/6 border ">
          <div className="svg flex-shrink-0 order-2 position-absolute position-xl-static top-0 left-50 translate-middle-x translate-middle-xl-none py-2 py-xl-0 ">logo</div>
        </div>
        <div className="d-flex w-full align-items-center justify-content-between ms-xl-12 mt-5 mt-xl-0 order-4 order-xl-3">
          <div className="flex-sm-shrink-0 w-45 d-none d-md-block">
            <Link to="/">
            Qui somme nous ?
            </Link>
          </div>
          <div className="d-none d-md-block flex-sm-shrink-0 mx-md-3 mx-xl-8">
            <ButtonGreen text="donner ou revendre des livres" />
          </div>
          <div className="position-relative flex-grow-1 me-md-3 me-xl-8  ">
          <form class="flex-grow-1" action="/search">
            <input type="text" placeholder="Rechercher par auteur, titre, ISBN..." minlength="1" maxlength="128" required="required" className="form-control flex-grow-1 fw-xl-500 h-10 pe-12 rounded-pill border-2 border-primary" v-model="query" />
           
        </form>
          </div>

        </div>
            <div className="flex-shrink-0 d-flex space-x-5 align-items-center ms-xl-0 order-3 order-xl-4">
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <PsychologyAltIcon className="text-orange-600" />
                <p>Aide</p>
              </div>
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <PersonIcon className="text-orange-600" />
                <p>Connexion</p>
              </div>

              <div className="flex flex-col items-center justify-center cursor-pointer">
                <ShoppingBasketIcon className="text-orange-600" />
                <p>Panier</p>
              </div>
            </div>
          </div>
        

    </header>
        
    

      <div className="w-full  bg-gray-00 h-full  ">
        <div
          className={`w-full mt-20 z-5 flex h-full fixed left-0 border ${
            ishover ? "z-50" : ""
          } `}
        >
          <div className="w-2/12 back_navbar overflow-y-scroll custom-scrollbar ">
            <ul>
              <li className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover text-pink-400 font-bold">
                Nouveau chez mous
              </li>
              <li className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover text-orange-600 font-bold">
                Promation
              </li>

              {categories.map((category, idx) => (
                <li
                  key={idx}
                  className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover"
                  onMouseEnter={() => handleMouseEnter(category)}
                >
                  {dataNav[category].nav}
                </li>
              ))}
              <li className="border p-3 cursor-pointer relative">
                <ButtonOrange text="carte cadeau" />
              </li>
              <li className="border p-3 cursor-pointer ">
                <ButtonGreen text="Donner ou revendre" />
              </li>
              {dataLi.map((item) => (
                <li className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`w-7/12 h-full ${
              ishover ? "back_sous_menu z-50 " : "z-0 hidden"
            }`}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className="border-b  w-full arrow flex items-center  cursor-pointer hover:bg-slate-50 relative ">
              <p className=" m-0">Tous les ouvrages</p>
              <div className="absolute  right-0">
              <span className="relative w-10 ">
                <KeyboardArrowRightRoundedIcon className="  arrow1 text-orange-600" />{" "}
              </span>


              </div>
            </div>
            {selectedItem && (
              <>
                {Object.keys(selectedItem)
                  .filter((key) => key !== "nav") // Filtrer la clé 'nav'
                  .map((div, idx) => (
                    <div key={idx} className="pl-5 pt-3">
                      <h3 className="text-xl ">{selectedItem[div].titre}</h3>
                        {selectedItem[div].img && <img className="w-full h-32 object-cover " src={selectedItem[div].img} alt="sous categorie" />}
                      <div className="flex w-full border-b p-5">
                        <SousCategorieDiv
                          selectedItem={selectedItem}
                          div={div}
                          ul="ul0"
                        />
                        <SousCategorieDiv
                          selectedItem={selectedItem}
                          div={div}
                          ul="ul1"
                        />
                        <SousCategorieDiv
                          selectedItem={selectedItem}
                          div={div}
                          ul="ul2"
                        />
                        

                      </div>
                 

                    
                    </div>
                  ))}
              </>
            )}
          </div>
          <div
            className={`w-3/12 h-full bg-black opacity-40  ${
              ishover ? "" : "z-0 hidden"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
