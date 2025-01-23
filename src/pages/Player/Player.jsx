import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Player.css'
import { use } from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWViNGNmYmQ0NTFmNjYxYzgyNGQ3MWFkOWFlNmQ0MSIsIm5iZiI6MTczNjcyNDU2MC40NzYsInN1YiI6IjY3ODQ1MDUwMTQzMWUwNTkxYWJiOWVkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bEu-jkf5Nn3J8RxT3inigsTP4-12zub7ff4_mkMRD_0'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  

  return (
    <div className='player'>
        <img src={back_arrow_icon} alt=''/>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%'
        title='trailer' frameBorder='0' allowFullScreen></iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player