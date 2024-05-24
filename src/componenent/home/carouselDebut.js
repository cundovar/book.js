import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const Carousel1=()=>{

    const SampleNextArrow = () => {
        return (
            <div className="absolute top-0 bottom-0 flex items-center right-0 z-50">
                <div className="w-10 h-10 bg-black text-white flex justify-center cursor-pointer items-center">{'>'}</div>
            </div>
        );
    }
    const SamplePrevtArrow = () => {
        return (
            <div className="absolute top-0 bottom-0 flex items-center left-0 cursor-pointer z-50">
                <div className="w-10 h-10 bg-black text-white flex justify-center items-center">{'<'}</div>
            </div>
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        // nextArrow:<SampleNextArrow/>,
        // prevArrow:<SamplePrevtArrow/>
      };


const dataCarousel=[
    ["10 livres à partire de 10€" ,"je fonce !","b1.jpg"],
    ["Votre selection lecture" ,"je lis !","b2.jpg"],
    ["Rejoingner les cercle littéraire","je m'incris","b3.jpg"]
]      
const CarouselContent=({titre,button,bg})=>{

    return(
        <>
       
        <div className={`flex tt max-xl:flex-col max:xl:justify-center max-xl:items-center w-full m-auto h-96 relative `} >
            <div className="w-4/6 z-20 max-xl:w-full  max-xl:h-5/6  gg flex justify-center items-center max-xl:p-5">
            <h1 className="text-6xl max-xl:text-4xl  bg-orange-600">
                {titre}
            </h1>
            </div>
            <div className="  max-xl:w-full z-20 w-2/6 font-bold  flex justify-center items-center">
         <button className="p-1 text-gray-200 w-40 bg-orange-600 rounded-xl ">
            {button}
         </button>
            </div>
            <img src={`/images/carousel1/${bg}`} alt={titre} className=" z-10 absolute w-full h-full object-cover"/>
        </div>


    
        
        </>


    )
}
      


    return(
        <section className="w-full  ">
          <div className="slider-container w-full ">
      <Slider {...settings} className="w-full m-auto border relative">




      {dataCarousel.map((item)=>(
<CarouselContent titre={item[0]} button={item[1]} bg={item[2]}/>

))}





       
      </Slider>
    </div>
        </section>
    )
}

export default Carousel1