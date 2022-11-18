import React, { useState } from 'react';
import { Category } from './components/Category';
import { EndGame } from './components/EndGame';
import { StartGame } from './components/StartGame';
import './index.scss';
import { questions } from './questions/questions';
import { FirstGamemenu } from './components/FirstGamemenu';

function App() {
  const [score, setScore] = useState(0);
  const full = questions.length;
  const [stepCategory, setStepCategory] = useState(0);
  const categorypercentage = Math.round((stepCategory / full) * 100);
  const [startgame, setStartgame] = useState(true);
  return (
    <div className='App'>
      {startgame !== true
        ?(stepCategory !== full 
          ? <StartGame score={score} setScore={setScore} full={full} stepCategory={stepCategory} setStepCategory={setStepCategory} categorypercentage={categorypercentage}/>
          : <EndGame/>
         )
        : <FirstGamemenu full={full} setStartgame={setStartgame}/>
      }
    </div>
  );
}

export default App;
