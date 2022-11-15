import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Daniel Lojo</h1>
            <p>Front End Developer Web</p>
        </div>
        <div className='footer-content'>
            <h3>Contáctame</h3>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/daniel-lojo-camacho-051578214/' target='_blank' rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://instagram.com/alejandroortega.7' target='_blank' rel='noreferrer'>
                    <i className='fab fa-instagram instagram'></i>
                </a>
                <i className='fa-regular fa-envelope igmail'></i>
                <p className='gmail'>dany.lojo@gmail.com</p>
            </div>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                Diseño por Daniel Lojo
            </div>
        </div>
    </footer>
  )
}

export default Footer