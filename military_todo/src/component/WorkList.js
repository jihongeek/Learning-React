import "./WorkList.css"

const WorkList = () => {
    return (
      <div className = "WorkList">
          <p>작업목록표</p>
          <input className = "searchbar" placeholder = "작업 검색" ></input>
      </div>  
    );
}

export default WorkList;