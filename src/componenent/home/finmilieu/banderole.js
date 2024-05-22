import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";

const Bandeau = () => {
  const items = [
    {
      icon: <MonetizationOnIcon className=" font text-orange-600" style={{fontSize:"2.5rem"}} />,
      text: "Gratuit",
    },
    {
      icon: <AccessTimeIcon className=" text-4xl text-orange-600" style={{fontSize:"2.5rem"}} />,
      text: "Simple et rapide",
    },
    {
      icon: <PublicIcon className="text-orange-600" style={{fontSize:"2.5rem"}}/>,
      text: "Engagé et français",
    },
  ];

  console.log("item");

  return (
    <section className="w-full h-96 bg-stone-300 flex items-center justify-center relative">
      <div className="xl:w-3/6 z-20 m-auto flex flex-col justify-center items-center space-y-5">
        <div>
          <h2 className="text-5xl md:text-xl-3 font-black text-orange-600">
            {" "}
            Donnez une seconde vie à vos livres
          </h2>
        </div>
        <div className="xl:bg-orange-500  max-xl:text-orange-600 p-3 rounded-2xl xl:text-white">
          <h4 className="max-xl:text-xl">DON ou VENTE de vos livres.</h4>
          <h4 className="max-xl:text-xl">Nous avons forcément une solution qui vous conviendra !</h4>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="xl:h-20 xl:p-5 p-1  rounded-xl xl:space-x-3  bg-white text-orange-600 flex justify-center items-center"
            >
              <div className="">
              {item.icon}

                </div>
                <div className="flex ">
              <p className=" m-auto flex-shrink-0">{item.text}</p>

                </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center bg-orange-600 text-gray-50 font-bold ">
          <button>Donner et revendre mes livre avec Recycle</button>
        </div>
      </div>
      <img
        src="/images/carousel1/b1.jpg"
        alt="bandeau_accueil"
        className="absolute z-10 h-full w-full object-cover"
      />
    </section>
  );
};

export default Bandeau;
