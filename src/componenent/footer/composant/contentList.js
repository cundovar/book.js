import React from "react";



const ContentArticleFooter=({item0,item})=>{


    return(

        <article className="w-1/4 ">
       
        <h4 className="text-xl text-orange-600 font-bold">{item0}</h4>
        <ul className="w-full p-0 m-0 ">
        {item.slice(1).map((element, index) => (
         <li className="cursor-pointer" key={index}>{element}</li>
       ))}
        </ul>


       
      </article>
    )
}

export default ContentArticleFooter