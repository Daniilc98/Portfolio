import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='about-container' id='sobremi'>
        <div className='about-descr'>
            <h3>Sobre mí</h3>
            <p>Hola, soy <strong>Daniel</strong>. Estudiante y autodidacta de programación de páginas web. He realizado un curso superior y sigo estudiando por mi cuenta diferentes librerías y distintos lenguajes de programación. Me gusta aprender cosas nuevas y llevarlas a cabo en proyectos donde solucionar los problemas que vayan saliendo al llevarlos a cabo, siempre con paciencia y buena gestión. Más abajo te dejo mi CV donde puedes ver mis conocimientos adquiridos en la programación. <strong> Te animo a echarle un ojo! </strong></p>
        </div>
        <div className='about-img'>
            <img src='https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg' alt='about me' />
        </div>
    </div>
  )
}

export default About;