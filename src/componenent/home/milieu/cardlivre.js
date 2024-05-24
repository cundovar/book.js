import React, { useState } from "react";

const Cardlivre = ({ key, titre, autor, image }) => {
  return (
    <article
      key={key}
      className=" w-[250px]  m-5 h-96 cardLivre  rounded-xl p-"
    >
      <div className="h-3/4 m-auto ">
   
     
     
            <img
              src={image}
              className="  shadow-slate-900 shadow-lg h-52 m-auto"
              alt={`image de couverture de ${autor}`}
            />
         
    
      </div>

      <div className="w-full h-1/4 ">
        <div className="h-3/4  flex flex-col justify-center items-center w-full ">
          <h5 className="text-center">{titre}</h5>
          <h6 className="  text-slate-600 ">{autor} </h6>
        </div>

        <div className="h-1/4 ">
          <p className="text-center text-orange-500 font-bold ">price €</p>
        </div>
      </div>
    </article>
  );
};

export default Cardlivre;
