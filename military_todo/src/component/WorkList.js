import "./WorkList.css"
import WorkItem from "./WorkItem"
import {useState} from "react"

const WorkList = ({work,onDelete}) => {
    const [queryData,setQueryData] = useState("");
    const onInputChange = (event) => {
      setQueryData(event.target.value);      
    }  

    return (
      <div className = "WorkList">
          <p>작업목록표</p>
          <input className = "searchbar" placeholder = "작업 검색" onChange={onInputChange} ></input>
          <div className = "list_wrapper">
            {work.map((it) => {
              if (it.name.includes(queryData))
              {
                return <WorkItem key = {it.id} {...it} onDelete={onDelete}/>;
              } 
              return null;
            })}
          </div>
      </div>  
    );
}

export default WorkList;