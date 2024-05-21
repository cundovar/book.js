import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PublicIcon from "@mui/icons-material/Public";

const Bandeau = () => {
  const items = [
    {
      icon: <MonetizationOnIcon className=" font text-orange-600" />,
      text: "Gratuit",
    },
    {
      icon: <AccessTimeIcon className=" text-4xl text-orange-600" />,
      text: "Simple et rapide",
    },
    {
      icon: <PublicIcon className="text-orange-600" />,
      text: "Engagé et français",
    },
  ];

  console.log("item");

  return (
    <section className="w-full h-96 bg-stone-300 flex items-center justify-center relative">
      <div className="w-3/6 z-20 m-auto flex flex-col justify-center items-center space-y-5">
        <div>
          <h2 className="text-5xl font-black text-orange-600">
            {" "}
            Donnez une seconde vie à vos livres
          </h2>
        </div>
        <div>
          <h4>DON ou VENTE de vos livres</h4>
          <h4 >nous avons forcément une solution qui vous conviendra !</h4>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="h-20 p-5 rounded-xl xl:space-x-3  bg-white text-orange-600 flex justify-center items-center"
            >
             
              {item.icon}
              <p>{item.text}</p>
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
