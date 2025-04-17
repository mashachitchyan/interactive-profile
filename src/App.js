import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Headshot from './assets/Headshot color.png';
import './App.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="App">
      <motion.div
        className="headshot-container"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="headshot-shadow"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <img 
          src={Headshot} 
          alt="Headshot" 
          className={`headshot ${!isHovered ? 'grayscale' : ''}`} 
        />
      </motion.div>
    </div>
  );
}

export default App;
