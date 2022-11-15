import React from 'react'
import './Portada.css';
import coverVideo from '../../media/coverVideo.mp4';

const Portada = () => {
  return (
    <div className='portada-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>Ortega Barber</h1>
        <p>Front End Developer Web</p>
    </div>
  )
}

export default Portada