import React from "react";
import { Link } from "react-router-dom";

function Movies(props) {
    let { id, name, genres, imageURL, language, runtime, rating } = props
    return (
        <div>
            <div className="card my-3">
                <div>
                    {/* <span className="position-absolute badge rounded-pill bg-danger" style={{right:"0"}}>{genres}</span> */}
                </div>
                <img src={imageURL} className="card-img-top rounded " alt="..." style={{ height: "25rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><h5 className="d-inline">Language : </h5> <h6 className="d-inline">{language}</h6>  <br /> <h5 className="d-inline">Average Rating : </h5> <h6 className="d-inline">{rating ? rating : "NOT KNOWN"}</h6> <br /> <h5 className="d-inline" >Runtime : </h5> <h6 className="d-inline">{runtime}</h6> <br /> <h5 className="d-inline" >Genres : </h5> <h6 className="d-inline">{genres.map((genre, index) => {
                        return <>{(index ? ',' : '') + genre}   </>
                    })}</h6> </p>
                    <Link to={'/' + id}>
                        <button className="btn btn-dark btn-sm btn-primary">Know More</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default Movies;