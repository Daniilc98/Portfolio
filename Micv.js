import React from 'react'
import './Micv.css';
import CV from '../../media/Curriculum_vitae.pdf';

const Micv = () => {
  return (
    <div className='micv-container'>
        <div className='micv-info'>
            <h1>Descarga mi <span>CV</span></h1>
            <p>Podrás encontrar todo sobre mí, mis conocimientos de programación, los lenguajes estudiados, frameworks, etc...</p>
        </div>
        <div className='buttonContainer'>
            <a className='cvButton' href={CV} download={'Curriculum_vitae.pdf'}>Descargar CV</a>
        </div>
    </div>
  )
}

export default Micv;