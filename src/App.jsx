import React from 'react'

// Components
import Hero from './components/Hero';
import Demo from './components/demo';

// Styles
import './App.css';

const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient' />
        </div>
        <div className='app'>
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App