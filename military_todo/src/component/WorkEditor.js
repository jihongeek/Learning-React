import "./WorkEditor.css"

const WorkEditor = () => {
    return (
        <div className = "WorkEditor">
            <p>새로운 작업 작성하기!</p>
            <div className = "editor_wrapper">
                <input placeholder="하.. 새로운 작업..ㅠ"></input>
                <button>추가</button>
            </div>
        </div>
    );
}

export default WorkEditor;