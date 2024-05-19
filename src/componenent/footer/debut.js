import React from "react";
import Milieu from "./milieu";
import ContentArticleFooter from "./composant/contentList";




const Debut=()=>{
 
    const items=[
        ["Bande-Déssiées","Mortelle Adèle","M'arabe du future","Tintin"],
        ["Mangas","Naruto","Damon Slayer","Bersek","One piece","Fairy Tail"],
        ["Romans","L'anomalie","Harlinquin","Harry Potter"],
        ["Vie Pratique","Livre Thibault","Les mot sont des fenêtres","La clés de votre énergie"]
    ]

    return(

        <div className="flex  h-96 space-x-5 footer_back1 items-start relative justify-center">
       

{items.map((item, index) => (
  <ContentArticleFooter key={index} item0={item[0]} item={item} />
))}

      
        <Milieu/>
        </div>
    )
}

export default Debut