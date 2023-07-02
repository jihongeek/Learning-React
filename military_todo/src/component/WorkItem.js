import "./WorkItem.css"
const WorkItem = ({id, name, isDone, createdDate}) => {
    return (
        <div className = "WorkItem">
            <div className = "checkbox_col">
                <input type = "checkbox" checked = {isDone}/>
            </div>
            <div className = "title_col">{name}</div>
            <div className = "date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className = "button_col">
                <button>삭제</button>
            </div>
        </div>
    );    
}

export default WorkItem;