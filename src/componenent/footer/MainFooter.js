import React from "react";
import Debut from "./debut";
import Fin from "./fin";
import Milieu from "./milieu";
import ToutAuBout from "./touaubout";
import ResponsiveFin from "./responsive/reponsiveFin";




const MainFooter=()=>{



    return(
        <footer className="w-full relative bg-red-50  ">
           <Debut/>
     
           <Fin/>
           
           <ToutAuBout/>
        </footer>
    )
}

export default MainFooter 