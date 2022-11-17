export const TipModal = ({setTipModal,question}) => {
    return(
        <div className="tip">
            <button onClick={() => {
                setTipModal(false)
            }}>X</button>
            <h1>
                Tip
            </h1>
            <h2>
                {question.tip}
            </h2>
        </div>
    )
}