import React, { useState } from "react";




const ResponsiveMenu=({menuVisible})=>{
const menu={
    main:
       [ {name:"Tous les ouvrages",submenu:null},
        {name:"Romans",submenu:"Romans"},
        {name:"Jeunesse",submenu:"Jeunesse"},
        {name:"Arts",submenu:"Arts"},
        {name:"Société",submenu:"Societe"},
        {name:"Bd",submenu:"Bd"},
        {name:"Loisirs",submenu:"Loisirs"},
        // {name:"Vie pratique",submenu:"ViePratique"},
    ],
    // sub
    Romans:[  
        {name:"retour",submenu:"main"},
        {name:"Littérature",submenu:"Litterature"},
        {name:"romans policiers et polars",submenu:"romansPoliciers "},
        {name:"Fantasy et terreur",submenu:"Fantazy"},
        {name:"Humour",submenu:"Humour"},
        
    ],
    Jeunesse:[
        {name:"retour",submenu:"main"},
        {name:"Livres pour enfant",submenu:"LivresEnfant"},
        {name:"Adolescents",submenu:"Adolescents"},
        
    ],
    Arts:[
        
        {name:"retour",submenu:"main"},
        {name:"Art,musique,cinéma",submenu:null},
        {name:"Histoire",submenu:null},
       
        
    ],
    Societe:[
        
        {name:"retour",submenu:"main"},
        {name:"Actu,polirique,société",submenu:null},
        {name:"Religiion et spiritualté",submenu:null},
    ],
    Bd:[
        
        {name:"retour",submenu:"main"},
        {name:"Bande dessinées",submenu:null},
        {name:"Manga",submenu:null},
        
    ],
    Loisirs:[
        
        {name:"retour",submenu:"main"},
        {name:"Tourisme voyage",submenu:null},
        {name:"vie pratique",submenu :null},
        
    ],
    
    // sub sub
    Litterature:[
        {name:"retour",submenu:"Romans"},
        {name:"Théatre",submenu:null},
        {name:"Literrature française",submenu:null},
        {name:"Poésie",submenu:null},
        {name:"Livres de références",submenu:null},
        {name:"Littérature anglaise",submenu:null},
        {name:"Romans historiques",submenu:null},
        {name:"récits de voyages",submenu:null},
        {name:"Littérature italienne",submenu:null},
        {name:"humour",submenu:null},
    ],
    romansPoliciers:[
        {name:"retour",submenu:"Romans"},
        {name:"Romans policiers",submenu:null},
        {name:"Thriller",submenu:null},
        {name:"Romans noirs",submenu:null},
        {name:"Romans noirs",submenu:null},
    ],
    
    Fantazy:[
        
        {name:"retour",submenu:"Romans"},
        {name:"Fantastique et Terreur",submenu:null},
        {name:"Fantasy",submenu:null},
        {name:"Film et serie TV",submenu:null},
        {name:"Grands courants",submenu:null},
        {name:"Cycles",submenu:null},
        {name:"Jeux de rôles",submenu:null},
        {name:"Ouvrages de Référece",submenu:null},
    ],
    humour:[
        {name:"retour",submenu:"Romans"},

        {name:"Satire",submenu:null},
        {name:"Humour polisson",submenu:null},
        {name:"Blagues",submenu:null},
        {name:"Dessins de presse",submenu:null},
        {name:"Humoristes",submenu:null},
    ],
    
    LivresEnfant:[
        {name:"retour",submenu:"Jeunesse"},
        {name:"Eveil",submenu:null},
        {name:"Héros" , submenu:null},
        {name:"Compte et légendes" , submenu:null},
        {name:"Album" , submenu:null},
        {name:"Jeux" , submenu:null},
        {name:"Chansons" , submenu:null},
        {name:"Fiction" , submenu:null},
        {name:"Découvertes" , submenu:null},
        {name:"Encyclopédies" , submenu:null},
    ],
    Adolescents:[
        {name:"retour",submenu:"Jeunesse"},
        {name:"romans" , submenu:null},
        {name:"Sport,art,crétaion" , submenu:null},
        {name:"Savoir et découvertes" , submenu:null},
        {name:"Comptes et légendes" , submenu:null},
    ],
    // LivresEnfant:[
    //     {name:"" , submenu:null},
    // ],
    // LivresEnfant:[
    //     {name:"" , submenu:null},
    // ],



    
}

const [activeMenu, setActiveMenu] = useState(null);

const handleMenuClick = (submenu) => {
    if (submenu) {
      setActiveMenu(submenu);
    }
  };
  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <li key={index} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleMenuClick(item.submenu)}>
        {item.name}
      </li>
    ));
  };
    return(
<>
{menuVisible && (
<div className=" border w-full z-50 absolute top-24 xl:hidden bg-white border-gray-300 rounded">
      <ul className="list-none p-0 m-0">
        {renderMenuItems(menu[activeMenu || 'main'])}
      </ul>
    </div>
       )}
</>
    )
}

export default ResponsiveMenu

