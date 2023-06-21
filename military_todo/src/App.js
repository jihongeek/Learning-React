import "./App.css";
import Header from "./component/Header";
import WorkEditor from "./component/WorkEditor";

function App() {
  return (
    <div className="App">
      <Header/>
      <WorkEditor/>      
      <WorkList/>
    </div>
  );
}

export default App;
