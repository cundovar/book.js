import React from "react";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ButtonGreen } from "../common/buttons";
import { Link } from "react-router-dom";

const Header=()=>{



    return(
        <header className="fixed w-full mt-0 bg-slate-50 z-50 h-20">
        <div className="position-relative h-full d-flex align-items-start align-items-xl-center justify-content-between px-4 px-xl-8 py-5 py-xl-0 flex-wrap flex-xl-nowrap">
          <div className="flex w-2/6 border ">
            <div className="svg flex-shrink-0 order-2  left-50 translate-middle-x translate-middle-xl-none py-2 py-xl-0 ">
              logo
            </div>
          </div>
          <div className="d-flex w-full align-items-center justify-content-between ms-xl-12 mt-5 mt-xl-0 order-4 order-xl-3">
            <div className="flex-sm-shrink-0 w-45 d-none d-md-block">
              <Link to="/">Qui somme nous ?</Link>
            </div>
            <div className="d-none d-md-block flex-sm-shrink-0 mx-md-3 mx-xl-8">
              <ButtonGreen text="donner ou revendre des livres" />
            </div>
            <div className="position-relative flex-grow-1 me-md-3 me-xl-8  ">
              <form class="flex-grow-1" action="/search">
                <input
                  type="text"
                  placeholder="Rechercher par auteur, titre, ISBN..."
                  minlength="1"
                  maxlength="128"
                  required="required"
                  className="form-control flex-grow-1 fw-xl-500 h-10 pe-12 rounded-pill border-2 border-primary"
                  v-model="query"
                />
              </form>
            </div>
          </div>
          <div className="flex-shrink-0 d-flex space-x-5 align-items-center ms-xl-0 order-3 order-xl-4">
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <PsychologyAltIcon className="text-orange-600" />
              <p>Aide</p>
            </div>
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <PersonIcon className="text-orange-600" />
              <p>Connexion</p>
            </div>

            <div className="flex flex-col items-center justify-center cursor-pointer">
              <ShoppingBasketIcon className="text-orange-600" />
              <p>Panier</p>
            </div>
          </div>
        </div>
      </header>

    )
}
export default Header