import React from "react";
import Carousel1 from "../componenent/home/carouselDebut";
import Livre from "../componenent/home/milieu/livre";
import Bandeau from "../componenent/home/finmilieu/banderole";
import Actualites from "../componenent/home/fin/actulite";
import MainFooter from "../componenent/footer/MainFooter";



const Home=()=>{


    return(
        <main className="xl:w-10/12 w-full  pl-0  lg:p-3 mt-36 pb-36 absolute right-0  h-full overflow-y-auto z-40">
<Carousel1/>
<Livre/>
<Bandeau/>
<Actualites/>
<MainFooter/>

        </main>
    )
}

export default Home