import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MoviePage() {
 const navigate = useNavigate();
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
  const handleClick = () =>{
    navigate(`/${id}/bookingForm`)
  }

  useEffect(() => {
    fetchmovies();
  }, []);

  return (
    <>
      <div>
        {/* <p>{Name}</p>
        <p>{Summary}</p>
        <p>{Type}</p>
        <p>{Genres}</p>
        <p>{Runtime}</p>
        <p>{ImageURL}</p>
        <p>{Rating}</p> */}
        <section style={{ backgroundColor: '#eee', height: 'auto' }}>
          <div class="container py-5 ">
            <div class="row justify-content-center">
              <div class="col-md-8 col-lg-6 col-xl-4" style={{ height: 'auto' }}>
                <div class="card text-black ">
                  <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                  <img src={ImageURL}
                    class="card-img-top" alt="Apple Computer" style={{ height: '25rem' }} />
                  <div class="card-body">
                    <div class="text-center " style={{ height: 'auto' }}>
                      <h5 class="card-title">{Name}</h5>
                      <h5 class="card-title" style={{ textDecorationLine: 'underline' }} >Summary</h5>
                      <h6 class="" dangerouslySetInnerHTML={{ __html: Summary }}></h6>
                    </div>
                    <div>
                      <div class="d-flex justify-content-between">
                        <span><h6> Language :</h6></span><span><h6>{Language}</h6></span>
                      </div>
                      <div class="d-flex justify-content-between">
                        <span><h6>Genre: </h6></span><h6><span>{Genres.map((genre, index) => {
                          return <>{(index ? ',' : '') + genre}   </>
                        })}</span></h6>
                      </div>
                      <div class="d-flex justify-content-between">
                        <span><h6>Rating: </h6></span><span><h6>{Rating}</h6></span>
                      </div>
                      <div class="d-flex justify-content-between">
                        <span><h6>Type: </h6></span><span><h6>{Type}</h6></span>
                      </div>
                      <div class="d-flex justify-content-between">
                        <span><h6>Runtime: </h6></span><span><h6>{Runtime}</h6></span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center total ">
                    <button onClick={handleClick} type="button" class="btn btn-primary">Book Ticket</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MoviePage