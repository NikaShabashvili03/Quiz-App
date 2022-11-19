export const EndGame = ({hintCount,score}) => {
    return(
        <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <div className="Category" style={{textAlign: 'center',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: '300px'}} src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
                <h2>You have completed the game <br></br> You have scored: <h1 style={{color: 'purple'}}>{score}</h1> Points and used hints: <h1 style={{color: 'orange'}}>{hintCount}</h1></h2>
                <a href="http://nikashabashvili03.github.io/Quiz-App">
                    <button className="EndGamebtn">Retry</button>
                </a>
            </div>
        </div>
    )
}