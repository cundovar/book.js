import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tilte } from "../../common/title";




const Actualites=()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        speed: 3000,
    
      };

      const datCarousel=[ ["Une sortie au théatre","2024","Les pièce de théatre à voir"],
                        [ "Théatre: notre selection lecture","2023","théatre en lecture"],
                        [ "Journée mondiale du livre","2012","Journée mondiale du livre"],
                        [ "Une selection lecture","2023","Votre selection lecture"],
                       [  "10 livre pour les jeunes","2024","les jeune et les livres"],
                    ["Commander pour gagner","2024","On essaie ?"]



      ]

const Carouselcontent=({titre,date,text})=>{

    return(
<div className="border">
    <div className="w-80 ">


<div className="h-72 cursor-pointer m-auto  bg-black flex w-full justify-center items-center">
     <h3 className="text-2xl text-gray-100">

        {titre}
     </h3>
</div>
     <div className="m-auto">
        <p className=" text-green-400 ">RECYCLELIVRE</p> <span>{date} </span>
        <h5 className="text-xl font-black "> {text} </h5>
     </div>


</div>


    </div>
    )
}

    return(

<section className="w-full h-96 ">

    <div>
       <Tilte text="Actualités"/>

        <div className="w-full  ">
  <Slider {...settings} className=" m-auto border flex items-center justify-center">
     {datCarousel.map((item)=>(
         <Carouselcontent titre={item[0]} text={item[2]} date={item[1]}  />

     ))}

  </Slider>
        </div>
    </div>


</section>
    )
}

export default Actualites

