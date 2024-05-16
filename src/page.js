import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./page/home";
import MainNav from "./componenent/navbar/MainNav";
import MainFooter from "./componenent/footer/MainFooter";


const Page=()=>{

    return(
    

        <Router>
            <MainNav/>
             <Routes> 
                     <Route path="/" element={<Home />}  /> 
                </Routes> 
               

        </Router>
     
    )
}

export default Page