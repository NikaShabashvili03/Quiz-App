import React, { useState } from 'react';
import { EndGame } from './components/EndGame';
import { StartGame } from './components/StartGame';
import './index.scss';
import { questions } from './questions/questions';
import { FirstGamemenu } from './components/FirstGamemenu';

function App() {
  const [score, setScore] = useState(20);
  const full = questions.length;
  const [stepCategory, setStepCategory] = useState(0);
  const categorypercentage = Math.round((stepCategory / full) * 100);
  const [startgame, setStartgame] = useState(true);
  const [hintCount, setHintCount] = useState(0);
  return (
    <div className='App'>
      {startgame !== true
        ?(stepCategory !== full 
          ? <StartGame hintCount={hintCount} setHintCount={setHintCount} score={score} setScore={setScore} full={full} stepCategory={stepCategory} setStepCategory={setStepCategory} categorypercentage={categorypercentage}/>
          : <EndGame hintCount={hintCount} score={score}/>
         )
        : <FirstGamemenu full={full} setStartgame={setStartgame}/>
      }
    </div>
  );
}

export default App;
