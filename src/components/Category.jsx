import React, { useState, useEffect } from 'react';
import { Game } from './Game';
import { Result } from './Result';
import '../index.scss';
import { Gamemenu } from './Gamemenu';

export const Category = ({hintCount,setHintCount,categorypercentage ,stepCategory, setStepCategory,score,setScore,category}) => {
const maxquestion = 10;
console.log(categorypercentage);
const [result, setResult] = useState([]);
useEffect(()=>{
    let arr = [];
    let results = [];
     for (let i = 0; i <= (category.List.length - 1); i++) {
         arr.push(i)
     }
     for (let i = 0; i <= maxquestion; i++) {
         const random = Math.floor(Math.random() * ((category.List.length - 1) - i));
        results.push(arr[random]);
        arr[random] = arr[(category.List.length - 1) - i];
    }
    setResult(results);
},[])
const [start, setStart] = useState(false);
const [step, setStep] = useState(0);
const [correct, setCorrect] = useState(0);
const [myStyle, setMyStyle] = useState(false);
const [styleColor, setStyleColor] = useState('rgba(0, 0, 0, 0.1)');
const [disabled, setDisabled] = useState(false);
const [Countone, setCountone] = useState();
const [tipModal, setTipModal] = useState(false);

const onClickVariant = (index, e) => {
    e.preventDefault();
    setDisabled(true);
    setStyleColor('red');
    setMyStyle(prevState => ({
    ...myStyle,
    [index]: !prevState[index]
    }))
    if(score == 0){
        setScore(score - 0);
        setCountone("");
    }
    if(index === question.correct){
        setStyleColor('green');
        setCorrect(correct + 1);
        setScore(score + 1);
        setCountone("+1 Score");
    }
}
const nextStep = (e) => {
    e.preventDefault();
    setStyleColor('rgba(0, 0, 0, 0.1)');
    setCountone("");
    setDisabled(false);
    setMyStyle(false);
    setStep(step + 1);
    if(step == maxquestion - 1){
        setStepCategory(stepCategory + 1);
    }
}
const question = category.List[result[step]];
    return(
        <div className="Category" style={{margin: '30px'}}>
            {start == true 
                ? (step !== maxquestion
                    ? <Game hintCount={hintCount} setHintCount={setHintCount} score={score} setScore={setScore} tipModal={tipModal} setTipModal={setTipModal} Countone={Countone} disabled={disabled} styleColor={styleColor} MyStyle={myStyle} nextStep={nextStep} result={result} maxquestion={maxquestion} step={step} question={question} onClickVariant={onClickVariant} />
                    : (<Result maxquestion={maxquestion} score={score} setScore={setScore} correct={correct} />)
                )
                : (
                 <Gamemenu Logo={category.Logo} category={category} setStart={setStart}/>
                )
            }
        </div>
    )
}