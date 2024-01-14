import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Service from './components/Service'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App