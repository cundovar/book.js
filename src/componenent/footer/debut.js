import React from "react";
import Milieu from "./milieu";
import ContentArticleFooter from "./composant/contentList";
import ResponsiveFin from "./responsive/reponsiveFin";




const Debut=()=>{
 
    const item=[
        ["Bande-Déssiées","Mortelle Adèle","M'arabe du future","Tintin"],
        ["Mangas","Naruto","Damon Slayer","Bersek","One piece","Fairy Tail"],
        ["Romans","L'anomalie","Harlinquin","Harry Potter"],
        ["Vie Pratique","Livre Thibault","Les mot sont des fenêtres","La clés de votre énergie"]
    ]

    return(

        <div className="flex max-xl:flex-col  xl:h-96 space-x-5 max-xl:w-full footer_back1 items-start relative justify-center">
       
<div className="w-full flex max-lg:hidden max-lg:absolute">
{item.map((item, index) => (
  <ContentArticleFooter key={index} item0={item[0]} item={item} />
))}

</div>
<div className="lg:hidden w-full">
{item.map((item, index) => (
    <ResponsiveFin item0={item[0]} item={item} index={index} key={index}/>
))}
</div>
      
        <Milieu/>
        </div>
    )
}

export default Debut