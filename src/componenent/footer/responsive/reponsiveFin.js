import React from "react";
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const ResponsiveFin = ({ item0,item,index }) => {


    // creation d'identifiant unique !!!
    const generateUniqueId = (prefix, index) => `${prefix}-${index}-${Math.random().toString(36).substr(2, 9)}`;
    const collapseId = generateUniqueId('flush-collapse', index);
    const headingId = generateUniqueId('flush-heading', index);
  
    
  return (
 



    <div className="accordion accordion-flush col-12" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id={headingId}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${collapseId}`}
            aria-expanded="false"
            aria-controls={collapseId}
          >
            {item0}
          </button>
        </h2>
        <div
          id={collapseId}
          className="accordion-collapse collapse"
          aria-labelledby={headingId}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text-white bg-black">
            <ul className="w-full p-0 m-0 list-none">
              {item.slice(1).map((element, index) => (
                <li key={index} className="cursor-pointer tesd text-center text-orange-300">
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default ResponsiveFin;
