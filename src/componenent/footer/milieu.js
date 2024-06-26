import React from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Article } from "@mui/icons-material";
import ResponsiveFin from "./responsive/reponsiveFin";
import ResponsiveMilieu from "./responsive/reponsiveMilieu";

const Milieu = () => {
  const content = [
    {
      icon: (
        <VpnKeyIcon
          className="text-orange-600  "
          style={{ fontSize: "2.5rem" }}
        />
      ),
      text: "En toute sécurité",
      titre: "Vous achetez chez nous en toute sécurité",
    },
    {
      icon: (
        <DirectionsCarIcon
          className="text-orange-600 "
          style={{ fontSize: "2.5rem" }}
        />
      ),
      text: "Pas satisfait ?",
      titre: "Profitez d'un délai de rétrtactation de 15 jours",
    },
    {
      icon: (
        <PsychologyAltIcon
          className="text-orange-600 "
          style={{ fontSize: "2.5rem" }}
        />
      ),
      text: "Ce n'est pas clair",
      titre: "Nous sommes toujours là pour vous aider",
    },
    {
      icon: (
        <FavoriteIcon
          style={{ fontSize: "2.5rem" }}
          className="text-2xl text-orange-600 "
        />
      ),
      text: "Un geste solidaire",
      titre: "Collecte de vos livre à domicile",
    },
  ];

  return (
    <>
     {/* Desktop version */}
    <article  className="max-xl:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-20 z-40 w-full flex items-center justify-center ">
      <div className="w-11/12 footer_back2 p-5 flex">
        {content.map((item, index) => (
          <div
            className={`w-1/4 ${
              index > 0 ? "border-l border-slate-500" : ""
            } space-y-5 p-4 cursor-pointer`}
            key={index}
          >
            <div>{item.icon}</div>
            <div>
              <p>{item.text}</p>
              <h3 className=" flex arrow text-xl text-orange-600">
                {item.titre}
                <span className="relative w-10">
                  <KeyboardArrowRightRoundedIcon className="  arrow1 text-orange-600" />{" "}
                </span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </article>

    
     {/* Mobile version */}
     <div className="block xl:hidden border m-auto w-full">
        {content.map((item, index) => (
          <ResponsiveMilieu key={index} icon={item.icon} titre={item.titre} />
        ))}
      </div>
    </>
  );
};

export default Milieu;
