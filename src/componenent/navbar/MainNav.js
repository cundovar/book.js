import React, { useEffect, useState } from "react";
import UseFetch from "../../utils/useFech";
import SousCategorieDiv from "./sousCategorieDiv";
import { ButtonGreen, ButtonOrange } from "../common/buttons";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Header from "./header";
import ResponsiveMenu from "./reponsive/reponsiveMenu";
const MainNav = () => {
  const jsonUrl = "/json/jsonNav.json";
  const { data: dataNav, error: errorNav } = UseFetch(jsonUrl);
  const [ishover, setIsHover] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // const categories = Object.keys(dataNav);
  // Récupérer les noms de catégories depuis le JSON
  console.log(dataNav);
  if (errorNav) {
    console.log("erreur", errorNav);
  }
  const categories = dataNav ? Object.keys(dataNav) : [];
  const dataLi = ["Aide", "recyclage Pro", "Nos engagements", "Le blog"];
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = (category) => {
    setIsHover(true);
    setSelectedItem(dataNav[category]);
  };
  console.log("selectedItem:", selectedItem);
  const handleToggleClick = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <>
     <Header handleToggleClick={handleToggleClick} menuVisible={menuVisible}  />

     
      <div className="w-full  bg-gray-00 h-full  ">

        <ResponsiveMenu menuVisible={menuVisible}/>
        <div
          className={`w-full mt-20 z-5 flex h-full fixed left-0 border ${
            ishover ? "z-50" : ""
          } `}
        >


          <div className="w-2/12 z-50 max-xl:hidden back_navbar overflow-y-scroll custom-scrollbar ">
            <ul>
              <li className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover text-pink-400 font-bold">
                Nouveau chez mous
              </li>
              <li className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover text-orange-600 font-bold">
                Promation
              </li>

              {categories.map((category, idx) => (
                <li
                  key={idx}
                  className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover"
                  onMouseEnter={() => handleMouseEnter(category)}
                >
                  {dataNav[category].nav}
                </li>
              ))}
              <li className="border p-3 cursor-pointer flex relative">
                <ButtonOrange text="carte cadeau " />
              </li>
              <li className="border p-3 flex cursor-pointer ">
                <ButtonGreen text="Donner ou revendre" />
              </li>
              {dataLi.map((item) => (
                <li className="border p-3 cursor-pointer hover:border-l-orange-600 hover:border-l-4 liHover">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`w-5/12 max-lg:hidden overflow-y-auto h-full ${
              ishover ? "back_sous_menu z-50 " : "z-0 hidden"
            }`}
             onMouseLeave={() => setIsHover(false)}
          >
            <div className="border-b  w-full arrow flex items-center  cursor-pointer hover:bg-slate-50 relative ">
              <p className=" m-0">Tous les ouvrages</p>
              <div className="absolute  right-0">
                <span className="relative w-10 ">
                  <KeyboardArrowRightRoundedIcon className="  arrow1 text-orange-600" />{" "}
                </span>
              </div>
            </div>
            {selectedItem && (
              <>
               {Object.keys(selectedItem)
                  .filter((key) => key !== "nav") // Filtrer la clé 'nav'
                  .map((div, idx) => (
                    <div key={idx} className="pl-5 b border-y-slate-950 p-3">
                      <h3 className="text-xl">{selectedItem[div].titre}</h3>

                      {Object.keys(selectedItem[div]).some(key => key.startsWith("ul")) ? (
                        <div className="flex w-full border-b ">
                          {Object.keys(selectedItem[div])
                            .filter(key => key.startsWith("ul"))
                            .map((ulKey, ulIdx) => (
                              <SousCategorieDiv key={ulIdx} selectedItem={selectedItem} div={div} ul={ulKey} />
                            ))}
                        </div>
                      ) : null}

                      {selectedItem[div].img && (
                        <div className=" relative h-full w-full flex justify-center items-center">
                              <div className="row z-30 w-full">
                                    <div className="col-8">
                                      <h5 className="text-white bg-orange-600 rounded-xl text-center p-2 ">
                                        10 livres à partir de 10 € !!!
                                        </h5>
                                    </div>
                                    <div className="col-4">
                                      <ButtonOrange text="je fonce"/>
                                    </div>
                              </div>
                          <img
                            className="w-full z-20 absolute m-auto h-32 object-cover"
                            src={selectedItem[div].img}
                            alt="sous categorie"
                          />

                        </div>
                        )}
                    </div>
                  ))}
              </>
            )}
          </div>
          <div
            className={`w-full absolute z-40 h-full max-lg:hidden bg-black opacity-40  ${
              ishover ? "" : "z-0 hidden"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
