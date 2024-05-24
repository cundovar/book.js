import React from "react";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";




const ResponsiveMilieu=({icon,titre})=>{



    return(
        <button className="flex items-center p-2 w-full text-left">
        <div className="mr-3">{icon}</div>
        <div className="flex-grow">{titre}</div>
        <KeyboardArrowRightRoundedIcon className="text-orange-600" />
      </button>
      
    )
}


export default ResponsiveMilieu