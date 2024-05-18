import React from "react";
import Milieu from "./milieu";




const Debut=()=>{
 
    const items=[
        ["Bande-Déssiées","Mortelle Adèle","M'arabe du future","Tintin"],
        ["Mangas","Naruto","Damon Slayer","Bersek","One piece","Fairy Tail"],
        ["Romans","L'anomalie","Harlinquin","Harry Potter"],
        ["Vie Pratique","Livre Thibault","Les mot sont des fenêtres","La clés de votre énergie"]
    ]

    return(

        <div className="flex  h-96 space-x-5 footer_back1 items-center relative justify-center">
        {items.map((item)=>(

           <article className="w-1/4">
             <h4 className="text-2xl">{item[0]}</h4>
             <ul>
             {item.slice(1).map((element, index) => (
              <li key={index}>{element}</li>
            ))}
             </ul>
           </article>

        ))}
        <Milieu/>
        </div>
    )
}

export default Debut