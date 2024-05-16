import React from "react";




const Cardlivre=({key,titre,autor,image})=>{

    return(
        
<article key={key} className=" w-[350px] rr m-5 bg-slate-300 shadow-slate-900 shadow-xl p-5">

<div className="bg-pink-500 w-12/12 h-8/12 m-auto border">
 <img src={image} alt={`image de couverture de ${autor}`}/>


</div>

<div className="w-full h-4/12 border">
    <div className="h-3/4 border flex flex-col justify-center items-center w-full ">
    <h3 >{titre}</h3>
    <h4 className="  text-slate-600 ">{autor} </h4>

    </div>

    <div className="h-1/4 border">

        <p className="text-center text-orange-500 font-bold ">price €</p>

    </div>
</div>

</article>
    )



}

export default Cardlivre