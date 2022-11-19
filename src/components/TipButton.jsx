export const TipButton = ({hintCount,setHintCount,disabled,setTipModal, score, setScore}) => {
    return(
        <>
            <button disabled={disabled}
            onClick={()=>{
              setTipModal(true)
              setHintCount(hintCount + 1);
              setScore(score - 5);
            }}
          className="tipbutton"><img src="https://img.freepik.com/premium-vector/halogen-lightbulb-icon-light-bulb-sign-electricity-idea-symbol-icon-white-background-flat-vector-illustration_157943-266.jpg?w=2000"></img>
          
          </button>
          <h3 className="tiph3">Price: -5$</h3>
        </>
    );
}