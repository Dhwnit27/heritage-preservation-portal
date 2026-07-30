import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div>
        <h1>Heritage Preservation Portal</h1>
        <p>Preserving history for future generations.</p>
      </div>
    </>
  );
}

export default App;