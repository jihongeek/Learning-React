
const Controller = ({clickHandle}) => {
    return (
        <div>
            <button onClick={clickHandle}>1-Death</button>
            <button onClick={clickHandle}>3-Death</button>
            <button onClick={clickHandle}>5-Death</button>
            <button onClick={clickHandle}>5-Kill</button>
            <button onClick={clickHandle}>5-Kill</button>
            <button onClick={clickHandle}>1-Kill</button>
        </div>
    );
}

export default Controller;
