import React, { useState } from "react";

const Cardlivre = ({ key, titre, autor, image }) => {
  return (
    <article
      key={key}
      className=" w-[250px]  m-5 h-96 bg-slate-300 rounded-xl p-5"
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
          <h3>{titre}</h3>
          <h4 className="  text-slate-600 ">{autor} </h4>
        </div>

        <div className="h-1/4 ">
          <p className="text-center text-orange-500 font-bold ">price €</p>
        </div>
      </div>
    </article>
  );
};

export default Cardlivre;
