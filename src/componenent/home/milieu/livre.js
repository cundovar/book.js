import React, { useEffect, useState } from "react";
import Cardlivre from "./cardlivre";
import axios from "axios";


const Livre=()=>{
const [books,setBooks]=useState([])

useEffect(()=>{
 const fetchBooks=async()=>{
    try{
        const response=await axios.get( 'https://openlibrary.org/search.json?q=book&limit=6')
        setBooks(response.data.docs)
        console.log("json",response.data.docs)
    }catch(error){
        console.error('erreur :',error)
    }
 }
 fetchBooks()

},[])



    return(

        <section>
            <h1 className="text-4xl">Nos meilleurs ventes</h1>
            <div className="flex overflow-x-scroll ">
         {books.map((book,indexx)=>(
            <Cardlivre key={indexx}
             nombre={book.author_name[0] } 
             titre={book.title} 
             autor={book.author_name[0]}
             image={`https://covers.openlibrary.org/b/oclc/${book.oclc[3]}-L.jpg`}
             />
         ))}

            </div>
            <div className="w-full flex justify-end">
                <button className="m-4 p-2 rounded-lg bg-orange-400 text-orange-600 font-bold hover:border border-orange-600 border-2">
                <p>Toutes les meilleurs ventes</p>
                </button>
            </div>
        </section>
    )
}

export default Livre