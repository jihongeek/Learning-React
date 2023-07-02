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
    createDate : new Date().getTime()
  },
  {
    id : 1,
    name : "애국가 제창",
    isDone: false,
    createDate : new Date().getTime()
  },
  {
    id : 2,
    name : "조국기도문 낭독",
    isDone: false,
    createDate : new Date().getTime()
  }
]


function App() {
  const idRef = useRef(3);
  const [work,setWork] = useState(mockWork);
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
  return (
    <div className="App">
      <Header/>
      <WorkEditor onCreate = {onCreate}/>      
      <WorkList work = {mockWork}/>
    </div>
  );
}

export default App;
