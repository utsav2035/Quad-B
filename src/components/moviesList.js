import React, { useEffect, useState } from "react";
import Movies from "./movies";

function MoviesList(){

   const [MoviesDatas, setMoviesData] = useState([]);


   useEffect(()=>{
      fetchmovies();
   },[]);

    const fetchmovies = async () =>{
        const url = "https://api.tvmaze.com/search/shows?q=all";
        let data = await fetch(url);
        let parsedData = await data.json();
        setMoviesData(parsedData);
        // console.log(MoviesDatas);
    }
    return(
        <>
        <h2 className='text-center ' style={{marginTop:"80px"}}>MOVIES LIST</h2>
         <div className="container">
         <div className='row my-3'>
            {MoviesDatas.map((element)=>{
                return  <div className='col-md-4' key={element.show.id}>  
                <Movies id = {element.show.id} name = {element.show.name} language = {element.show.language} rating = {element.show.rating.average} imageURL = {element.show.image.original} genres = {element.show.genres} runtime = {element.show.runtime} summary = {(element.show.summary).slice(0, 300)} />
                </div>
            })}
    
    </div>
    </div>
        </>
    )

}


export default MoviesList