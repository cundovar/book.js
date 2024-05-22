import React from "react";
import { ArrowRight } from "./arrows";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PropTypes from 'prop-types';


export  function ButtonOrange({text,arrow}){
return(
  
    <button className=" space-x-3 flex-shrink-0  orange arrow buttonHover p-2 rounded-lg hover:border-orange-600  bg-orange-300  text-orange-600 font-bold flex items-center justify-center">
    {text} {arrow}
</button>


 

    
)
}
ButtonOrange.propTypes = {
    text: PropTypes.string.isRequired,
    arrow: PropTypes.element
};

export  function ButtonGreen({text}){
return(
    <>
    <button className=" flex-shrink-0 green buttonHover p-2 rounded-lg hover:border-green-700 bg-green-200  text-green-700 font-bold flex items-center justify-center">
    {text}
</button>

    </>
)
}