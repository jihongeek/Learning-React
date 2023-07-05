import {useState,useRef} from "react"
import "./WorkEditor.css"

const WorkEditor = ({onCreate}) => {
    const [name, setName] = useState("");
    const inputRef = useRef();
    const onNameChange = (e) => {
        setName(e.target.value);
    }
    const onSubmit = () => {
        if (name === "")
        {
            inputRef.current.focus();
            return;
        }
        onCreate(name);
        setName("");
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13)
        {
            onSubmit();
        }
    }

    return (
        <div className = "WorkEditor">
            <p>새로운 작업 작성하기!</p>
            <div className = "editor_wrapper">
                <input
                    ref = {inputRef}
                    value = {name} 
                    onChange={onNameChange}
                    placeholder="하.. 새로운 작업..ㅠ"
                    onKeyDown={handleKeyDown}
                />
                <button onClick = {onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default WorkEditor;