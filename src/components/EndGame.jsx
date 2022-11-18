export const EndGame = () => {
    return(
        <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <div className="Category" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: '300px'}} src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
                <h2>You End This Game</h2>
                <a href="http://nikashabashvili03.github.io/Quiz-App">
                    <button className="EndGamebtn">Retry</button>
                </a>
            </div>
        </div>
    )
}