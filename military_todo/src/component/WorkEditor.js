import {useState} from "react"
import "./WorkEditor.css"

const WorkEditor = ({onCreate}) => {
    const [name, setName] = useState("");
    const onNameChange = (e) => {
        setName(e.target.value);
    }
    const onSubmit = () => {
        onCreate(name);
    }

    return (
        <div className = "WorkEditor">
            <p>새로운 작업 작성하기!</p>
            <div className = "editor_wrapper">
                <input
                    value = {name} 
                    onChange={onNameChange}
                    placeholder="하.. 새로운 작업..ㅠ"
                />
                <button onClick = {onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default WorkEditor;