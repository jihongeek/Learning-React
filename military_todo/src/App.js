import "./App.css";
import Header from "./component/Header";
import WorkEditor from "./component/WorkEditor";
import WorkList from "./component/WorkList"; 
import {useState, useRef} from "react"

const mockWork = [
  {
    id : 0,
    name : "전방에 힘찬 함성 3초간 실시",
    isDone: false,
    createdDate : new Date().getTime()
  },
  {
    id : 1,
    name : "애국가 제창",
    isDone: false,
    createdDate : new Date().getTime()
  },
  {
    id : 2,
    name : "조국기도문 낭독",
    isDone: false,
    createdDate : new Date().getTime()
  }
]


function App() {
  const idRef = useRef(3);
  const [work,setWork] = useState(mockWork);
  const onDelete = (workId) => {
    let tempWork = [];
    let isFound = false;
    for (let i = 0; i < work.length; i++)
    {
      if (workId === work[i].id)
      {
        isFound = true;
        continue; 
      }
      if (isFound === true)
      {
        tempWork.push({
          id : work[i].id - 1,
          name : work[i].name,
          createdDate : work[i].createdDate
        })
      } else {
        tempWork.push(work[i]);
      }

    }
    setWork(tempWork);
    idRef.current -= 1;
  } 
  const onCreate = (workName) => {
    const newItem = {
      id : idRef.current,
      name : workName,
      isDone : false,
      createdDate : new Date().getTime()
    }
    setWork([...work,newItem]);
    idRef.current += 1; 
  }
  const onUpdate = (workId) => {
    let tempWork = [];
    for (let i = 0; i < work.length; i++)
    {
      if (workId === work[i].id) 
      {
        tempWork.push({
          id : work[i].id,
          name : work[i].name,
          createdDate : work[i].createdDate,
          isDone : !work[i].isDone
        })
      } else {
        tempWork.push(work[i]);
      }
    }
    setWork(tempWork); 
  }
  return (
    <div className="App">
      <Header/>
      <WorkEditor onCreate = {onCreate}/>      
      <WorkList work = {work} onDelete = {onDelete} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
