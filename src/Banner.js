import React,{ useEffect, useState } from 'react'
import axios from './axios';
import './Row.css'
import requests from './requests';
import './Banner.css'
const base_url="https://image.tmdb.org/t/p/original/";


function Banner({title,fetchUrl}) {
    const [movie,setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[
                Math.floor(Math.random()* request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return (
        <div style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            }} className="banner ">
        <div className="content">
            <h1 className="title">{movie?.title ||movie?.name ||movie?.original_name}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""} </h1>

        </div>
        <div className="fade_bottom">
          
        </div>

    </div>
  )
}
  export default Banner