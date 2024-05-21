import React from "react";
import ContentArticleFooter from "./composant/contentList";




const Fin=()=>{
 
    const items=[
        ["A propos","Mortelle Adèle","M'arabe du future","Tintin"],
        ["Besoin d'aide","Aides et assistace","Etat des livres","Livraison","paiment","Nous contacter"],
        ["Nos services","L'anomalie","Harlinquin","Harry Potter"],
        ["Nos antennes","Paris","Londres","Pékin","Los angeles","buenos-Aires"]
    ]

    return(

        <div className="h-96 flex footer_back3  z-50 items-end  justify-center">
 <div className="flex space-x-5 w-full " >

        {items.map((item, index) => (
  <ContentArticleFooter key={index} item0={item[0]} item={item} />
))}


 </div>

        </div>
    )
}

export default Fin