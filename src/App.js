import React, { useState, useEffect } from 'react';
import './assets/styles/main.css';

//Components
import RenderScore from './components/renderScore';
import RenderCards from './components/renderCards';


const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(()=>{
    const onCardClick = () => {
        setScore(score + 1);
    }

    const card = document.querySelectorAll('.column');
    card.forEach(el=> el.addEventListener('click', onCardClick));

    return () => {
        document.removeEventListener('click', onCardClick)
    };
  },[score]);

  return (
    <div id="app-container">
      
      <RenderScore playerScore={score} playerHighScore={highScore}/>
      <RenderCards />
    </div>
  )
}

export default App;
