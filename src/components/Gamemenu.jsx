export function Gamemenu({Logo,setStart, category}) {
    return (
        <button className="gamemenu" onClick={(e) => {
          e.preventDefault()
          setStart(true);
          }}>
            <img src={Logo} />
            <h2>{category.Category}</h2>
          </button>
    );
  }