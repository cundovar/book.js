import React from "react";

const SousCategorieDiv = ({ selectedItem, div, ul }) => {
  return (
    <div className="w-1/3">
      {selectedItem[div][ul] && (
        <ul>
          {selectedItem[div][ul].slice(0, 3).map(
            (
              item,
              i // Limite à deux éléments avec slice(0, 2)
            ) => (
              <li key={i}>
                <a href="#" className="hover:border-b">
                  {item}
                </a>
              </li>
            )
            
          )}
      {selectedItem[div][ul] && selectedItem[div][ul].length > 3 && (
        <a href="#">
          {" "}
          <li  className="text-orange-500 ">plus info</li>
        </a>
      )}
        </ul>
      )}
    </div>
  );
};

export default SousCategorieDiv;
