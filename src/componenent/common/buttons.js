import React from "react";
import { ArrowRight } from "./arrows";




export  function ButtonOrange({text}){
return(
    <div className=" ">
    <button className=" space-x-3  orange  buttonHover p-2 rounded-lg hover:border-orange-600  bg-orange-300  text-orange-600 font-bold flex items-center justify-center">
    {text} <ArrowRight/>
</button>


    </div>

    
)
}
export  function ButtonGreen({text}){
return(
    <>
    <button className=" green buttonHover p-2 rounded-lg hover:border-green-700 bg-green-200  text-green-700 font-bold flex items-center justify-center">
    {text}
</button>

    </>
)
}