export const FirstGamemenu = ({setStartgame, full}) => {
    return(
        <>
        <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <div className="Category" style={{marginTop: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: '300px'}} src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000" />
                <h2>Quiz is a quick and informal assessment of student knowledge. Quizzes are often used in North American higher education environments to briefly test a students’ level of comprehension regarding course material, providing teachers with insights into student progress and any existing knowledge gaps. <h3 style={{textAlign: 'center'}}>This quiz contains {full} categories</h3></h2>
                <button onClick={(e) => {
                    e.preventDefault();
                    setStartgame(false);
                    }} className="EndGamebtn">Start</button>
            </div>
        </div>
        </>
    )
}