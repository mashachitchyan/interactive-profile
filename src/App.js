import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Headshot from './assets/Headshot color.png';
import './App.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showText, setShowText] = useState(false);

  const fullText = "Hi, I'm Masha! I am a user experience designer. I strive to create thoughtful, user-friendly experiences that connect and engage. My work focuses on improving interactions and enhancing everyday experiences.";
  const linkText = " Let's connect!";
  const linkUrl = "https://mashachitchyan.framer.website";

  useEffect(() => {
    if (isClicked) {
      setShowText(true);
      let currentText = '';
      const typingInterval = setInterval(() => {
        if (currentText.length < fullText.length) {
          currentText = fullText.substring(0, currentText.length + 1);
          setTypedText(currentText);
        } else {
          clearInterval(typingInterval);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="App">
      <motion.div
        className="content-container"
        animate={isClicked ? 
          { scale: 0.5, y: -100 } : 
          { scale: 1, y: 0 }
        }
        transition={isClicked ? 
          { duration: 0.5, ease: "easeOut" } : 
          { duration: 0.3, ease: "easeOut" }
        }
      >
        <motion.div
          className="headshot-container"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          onHoverStart={() => !isClicked && setIsHovered(true)}
          onHoverEnd={() => !isClicked && setIsHovered(false)}
          onClick={handleClick}
          style={{ cursor: isClicked ? 'default' : 'pointer' }}
        >

          <motion.div
            className="headshot-shadow"
            animate={isClicked ? 
              { scale: 0.6 } : 
              { scale: [1, 1.1, 1] }
            }
            transition={isClicked ? 
              { duration: 0.5 } : 
              { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
          />
          <img 
            src={Headshot} 
            alt="Headshot" 
            className={`headshot ${!isHovered && !isClicked ? 'grayscale' : ''}`} 
          />
        </motion.div>

        <AnimatePresence>
        {showText && (
          <motion.div
            className="text-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <p className="typed-text">
              {typedText}
              {typedText === fullText && (
                <a 
                  href={linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="connect-link"
                >
                  {linkText}
                </a>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>

   
    </div>
  );
}

export default App;
