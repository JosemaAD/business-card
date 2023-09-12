import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import Image from './components/Image'
import Title from './components/Title'
import Buttons from './components/Buttons'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    
      <div className="card">
        <Image />
        <Title />
        <Buttons />
        <MainContent />
        <Footer />
      </div>
    
  )
}

export default App
