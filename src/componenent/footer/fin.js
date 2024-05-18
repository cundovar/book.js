import React from "react";




const Fin=()=>{
 
    const items=[
        ["A propos","Mortelle Adèle","M'arabe du future","Tintin"],
        ["Besoin d'aide","Aides et assistace","Etat des livres","Livraison","paiment","Nous contacter"],
        ["Nos services","L'anomalie","Harlinquin","Harry Potter"],
        ["Nos antennes","Paris","Londres","Pékin","Los angeles","buenos-Aires"]
    ]

    return(

        <div className="flex space-x-5 h-96 footer_back3  z-50 items-center justify-center">
        {items.map((item)=>(

           <article className=" border-l w-1/4">
             <h4 className="text-2xl">{item[0]}</h4>
             <ul>
             {item.slice(1).map((element, index) => (
              <li key={index}>{element}</li>
            ))}
             </ul>
           </article>

        ))}
        </div>
    )
}

export default Fin