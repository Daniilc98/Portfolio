import React, { useState, useEffect } from 'react';
import './App.css';
import Portada from './componentes/portada/Portada';
import Navbar from './componentes/navbar/Navbar';
import About from './componentes/about/About';
import Micv from './componentes/micv/Micv';
import Info from './componentes/info/Info';
import Footer from './componentes/footer/Footer';

function App() {

  const[scrollHeigth, setScrollHeigth] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeigth(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [scrollHeigth])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeigth} />
      <Portada />
      <About />
      <Micv />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
