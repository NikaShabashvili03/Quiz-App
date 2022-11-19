import { Category } from './Category';
import '../index.scss';
import { questions } from '../questions/questions';

export const StartGame = ({hintCount,setHintCount,score,categorypercentage,stepCategory,setStepCategory,setScore}) => {
    return(
        <div className='App'>
            <div className='count'>
            <h2 >Score: </h2><h2> {score}$</h2>
            </div>
            <ul>
            <div class="progressone">
                <div class="progressone__fill" style={{width: `${categorypercentage}%`}}></div>
                <span class="progressone__text">{categorypercentage}%</span>
                <span class="progressone__texttwo">Category Progress</span>
            </div>
                {/* <img src="https://img.freepik.com/free-vector/quiz-background-with-items-flat-design_23-2147599082.jpg?w=1060&t=st=1668706107~exp=1668706707~hmac=7898095b737691c71a34306ef791a297fa4df3024ac3f3b0b935f854c7ac320f" /> */}
            </ul>
            <div className='categorylist'>
                {questions.map(list => <Category hintCount={hintCount} setHintCount={setHintCount} categorypercentage={categorypercentage} stepCategory={stepCategory} setStepCategory={setStepCategory} score={score} setScore={setScore} category={list}/>)}
            </div>
        </div>
    );
}