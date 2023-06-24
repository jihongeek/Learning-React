import "./WorkItem.css"
const WorkItem = () => {
    return (
        <div className = "WorkItem">
            <div className = "checkbox_col">
                <input type = "checkbox" />
            </div>
            <div className = "title_col">전방에 힘찬 함성 3초간 실시!</div>
            <div className = "date_col">{new Date().toLocaleDateString()}</div>
            <div className = "button_col">
                <button>삭제</button>
            </div>
        </div>
    );    
}

export default WorkItem;