import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tilte } from "../../common/title";

const Actualites = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth <= 1280) { // Adjust the max-xl breakpoint here
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow(); // Set initial value
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:slidesToShow ,
    slidesToScroll:2 ,
    autoplay: false,
    speed: 3000,
  };

  const datCarousel = [
    ["Une sortie au théatre", "2024", "Les pièce de théatre à voir","img1.jpg"],
    ["Théatre: notre selection lecture", "2023", "théatre en lecture","img2.jpg"],
    ["Journée mondiale du livre", "2012", "Journée mondiale du livre","img3.jpg"],
    ["Une selection lecture", "2023", "Votre selection lecture","img-4.jpg"],
    ["10 livre pour les jeunes", "2024", "les jeune et les livres","img5.jpg"],
    ["Commander pour gagner", "2024", "On essaie ?","img6.jpg"],
  ];

  const Carouselcontent = ({ titre, date, text,img }) => {
    return (
      <div className=" flex items-center justify-center">
        <div className="w-80 ">
          <div className="h-72 cursor-pointer m-auto relative flex w-full justify-center items-center">
            <h4 className="text-2xl text-bold bg-orange-400 p-2 z-20 text-gray-100">{titre}</h4>
            <img src={`/images/carousel2/${img} `} className="absolute z-10 w-full object-cover h-full"/>
          </div>
          <div className="m-auto space-y-3 pt-3 pb-3 ">
            <p className=" text-green-400 ">RECYCLELIVRE</p>{" "}
            <span>{date} </span>
            <h5 className="text-xl font-black "> {text} </h5>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full h-96 mb-64 ">
      <div>
        <Tilte text="Actualités" />

        <div className="w-full  ">
          <Slider
            {...settings}
            className=" m-auto  flex items-center justify-center"
          >
            {datCarousel.map((item) => (
              <Carouselcontent titre={item[0]} text={item[2]} date={item[1]} img={item[3]} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Actualites;
