import React from "react";




const Milieu=()=>{


    const content=[
        ["clé","En toute sécurité","Vous achetez chez nous en toute sécurité"],
        ["camion","Pas satisfait ? ","Profitez d'un délai de rétrtactation de 15 jours"],
        ["boué","Ce n'est pas clair","Naous sommes toujours là pour vous aider"],
        ["coeur","Un geste solidaire","Collecte de vos livre à domicile"]
    ]



    return(

        <article className=" absolute bottom-0 right-0  transform translate-y-1/2 h-20 z-40 w-full flex items-center justify-center ">
              <div className="w-11/12 footer_back2 p-5 flex">
{content.map((item,index)=>(
    
    <div className={`w-1/4 ${index > 0 ? 'border-l border-slate-500' : ''} space-y-5 p-4 cursor-pointer`} key={index}>
                    <div>
                    {item[0]}
                    </div>
                    <div>
                        <p>
{item[1]}
                        </p>
                        <h3 className="text-xl text-orange-600">
                            {item[2]}
                        </h3>

                    </div>
                </div>
))}

              </div>
        </article>
    )
}

export default Milieu