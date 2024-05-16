import React from "react";

const Bandeau = () => {
  return (
    <section className="w-full h-96 bg-stone-300 flex items-center justify-center">
      <div className="w-3/6 m-auto flex flex-col justify-center items-center space-y-5">
        <div>
          <h2 className="text-5xl font-black">
            {" "}
            Donnez une seconde vie à vos livres
          </h2>
        </div>
        <div>
          <h4>DON ou VENTE de vos livres</h4>
          <h4>nous avons forcément une solution qui vous conviendra !</h4>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-20 p-5 bg-white text-orange-600 flex justify-center items-center">
            Gratuit
          </div>
          <div className="h-20 p-5 bg-white text-orange-600 flex justify-center items-center">
            Simple et rapide
          </div>
          <div className="h-20 p-5 bg-white text-orange-600 flex justify-center items-center">
            Engagé et français
          </div>
        </div>
        <div className="flex justify-center items-center bg-orange-600 text-gray-50 font-bold ">
          <button>Donner et revendre mes livre avec Recycle</button>
        </div>
      </div>
    </section>
  );
};

export default Bandeau;
