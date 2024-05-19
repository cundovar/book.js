import React from "react";
import { ArrowRight } from "./arrows";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PropTypes from 'prop-types';


export  function ButtonOrange({text,arrow}){
return(
    <div className=" ">
    <button className=" space-x-3  orange arrow buttonHover p-2 rounded-lg hover:border-orange-600  bg-orange-300  text-orange-600 font-bold flex items-center justify-center">
    {text} {arrow}
</button>


    </div>

    
)
}
ButtonOrange.propTypes = {
    text: PropTypes.string.isRequired,
    arrow: PropTypes.element
};

export  function ButtonGreen({text}){
return(
    <>
    <button className=" green buttonHover p-2 rounded-lg hover:border-green-700 bg-green-200  text-green-700 font-bold flex items-center justify-center">
    {text}
</button>

    </>
)
}