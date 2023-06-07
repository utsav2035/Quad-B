import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookForm() {
    const [MoviesDatas, setMoviesData] = useState([]);
  const [Name, setName] = useState('');
  const [Summary, setSummary] = useState('');
  const [Type, setType] = useState('');
  const [Genres, setGenres] = useState([]);
  const [Runtime, setRuntime] = useState('');
  const [ImageURL, setImageURL] = useState('');
  const [Rating, setRating] = useState('');
  const [Language, setLanguage] = useState('');
  const { id } = useParams();
  // console.log(id);

  const fetchmovies = async () => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setMoviesData(parsedData);
    // console.log(MoviesData);
    setName(parsedData.name);
    setImageURL(parsedData.image.original);
    setGenres(parsedData.genres);
    setSummary(parsedData.summary);
    setRating(parsedData.rating.average);
    setType(parsedData.type);
    setRuntime(parsedData.runtime);
    setLanguage(parsedData.language);
  }
  
  useEffect(() => {
    fetchmovies();
  }, []);

   return(
    <form className="pt-5">
    

    <div className="row align-items-center">
    <div className="col-8 pl-5">
    <img style={{height:'11rem'}} src={ImageURL} alt=".." className="pl-5"/>
     </div>
     
    <div className="col-8">
    <div><span ><h3 className="d-inline text-danger" >Booking Ticket for movie : </h3><h3 className="d-inline">{Name}</h3></span></div>
     </div>  
     <div className="col-6">
    <div><span ><h3 className="d-inline text-danger" >Runtime : </h3><h3 className="d-inline">{Runtime}</h3></span></div>
     </div>  
     <div className="col-6">
    <div><span ><h3 className="d-inline text-danger" >Language : </h3><h3 className="d-inline">{Language}</h3></span></div>
     </div>  
     <div className="col-6">
     <label for="exampleInputEmail1" className="col-form-label"><h4>Email address</h4></label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text"><h6>These are required field.</h6></div>
     </div>
     
     <div className="col-6">
      <label for="exampleInputPassword1" className="form-label"><h5>Password</h5></label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
      
    <div className="col-12">
        <br/>
    </div>

    <div className="col-6">
      <label for="exampleInputPassword1" className="form-label"><h5>Phone No.</h5></label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>

    <div className="col-6">
      <label for="exampleInputPassword1" className="form-label"><h5>Remark</h5></label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    </div>
    <br/>
    <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
   )
    
}

export default BookForm;