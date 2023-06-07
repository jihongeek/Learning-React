
const Controller = ({clickHandle}) => {
    return (
        <div>
            <button style = {{backgroundColor : "rgb(222,155,53)"}} onClick={clickHandle}>1-Death</button>
            <button style = {{backgroundColor : "rgb(222,155,53)"}} onClick={clickHandle}>3-Death</button>
            <button style = {{backgroundColor : "rgb(222,155,53)"}} onClick={clickHandle}>5-Death</button>
            <button style = {{backgroundColor : "rgb(222,155,53)"}} onClick={clickHandle}>5-Kill</button>
            <button style = {{backgroundColor : "rgb(222,155,53)"}} onClick={clickHandle}>5-Kill</button>
            <button style = {{backgroundColor : "rgb(222,155,53)"}} onClick={clickHandle}>1-Kill</button>
        </div>
    );
}

export default Controller;
