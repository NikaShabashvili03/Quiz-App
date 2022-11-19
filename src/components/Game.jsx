import { TipButton } from "./TipButton";
import { TipModal } from "./TipModal";

export function Game({setHintCount,hintCount,score, setScore, tipModal,disabled,setTipModal, Countone, styleColor, MyStyle, nextStep,step, question, onClickVariant, maxquestion}) {
    const percentage = Math.round((step / maxquestion) * 100);
    console.log(score);
    return (
      <div className="Game">
        {score >= 5
          ? <TipButton hintCount={hintCount} setHintCount={setHintCount} disabled={disabled} score={score} setScore={setScore} setTipModal={setTipModal}/>
          : <h3 style={{marginLeft: '-60px'}} className="tiph3">Hint Price: 5$</h3>
        }
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
          <p>{step}/{maxquestion}</p>
        </div>
         {tipModal && <TipModal setTipModal={setTipModal} question={question}/>}
         <h1>{question.title}</h1>
        <ul>
            <h4 style={{color: styleColor }} >{Countone}</h4>
            {question.variants.map((text, index) => 
              <button className="buttonlist" disabled={disabled} style={{
                borderColor: MyStyle[`${index}`] 
                  ? styleColor 
                  : 'rgba(0, 0, 0, 0.1)'
                }} 
                onClick={(e) => {
                onClickVariant(index, e);
                
              }} key={text}>{text}</button>
            )}
        </ul>
        {disabled && <button onClick={nextStep}>Next</button>}
      </div>
    );
  }