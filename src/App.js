import React, { useState } from 'react';
import { Category } from './components/Category';
import './index.scss';
import { questions } from './questions/questions';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className='App'>
      <div className='count'>
       <h2 >Score: </h2><h2> {score}$</h2>
      </div>
      <ul>
        <img src="https://img.freepik.com/free-vector/quiz-background-with-items-flat-design_23-2147599082.jpg?w=1060&t=st=1668706107~exp=1668706707~hmac=7898095b737691c71a34306ef791a297fa4df3024ac3f3b0b935f854c7ac320f" />
      </ul>
      <div className='categorylist'>
         {questions.map(list => <Category score={score} setScore={setScore} category={list}/>)}
      </div>
    </div>
  );
}

export default App;
