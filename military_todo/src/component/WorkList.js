import "./WorkList.css"
import WorkItem from "./WorkItem"

const WorkList = ({work}) => {
    return (
      <div className = "WorkList">
          <p>작업목록표</p>
          <input className = "searchbar" placeholder = "작업 검색" ></input>
          <div className = "list_wrapper">
            {work.map((it) => (
              <WorkItem {...it}/>
            ))}
          </div>
      </div>  
    );
}

export default WorkList;