import "./App.css";
import Header from "./component/Header";
import WorkEditor from "./component/WorkEditor";
import WorkList from "./component/WorkList"; 
import {useState} from "react"

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
  },
  {
    id : 3,
    name : "국군도수체조 실시",
    isDone: false,
    createDate : new Date().getTime()
  }
]
function App() {
  const [work,setWork] = useState(mockWork);
  return (
    <div className="App">
      <Header/>
      <WorkEditor/>      
      <WorkList/>
    </div>
  );
}

export default App;
