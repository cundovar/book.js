import React from "react";
import Carousel1 from "../componenent/home/carouselDebut";
import Livre from "../componenent/home/milieu/livre";
import Bandeau from "../componenent/home/finmilieu/banderole";
import Actualites from "../componenent/home/fin/actulite";
import MainFooter from "../componenent/footer/MainFooter";



const Home=()=>{


    return(
        <main className="w-9/12 mt-20 absolute right-0 bg-red-600 h-full z-40">
<Carousel1/>
<Livre/>
<Bandeau/>
<Actualites/>
<MainFooter/>

        </main>
    )
}

export default Home