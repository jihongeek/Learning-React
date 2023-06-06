import './App.css';
import Viewer from './Viewer';
import Controller from './Controller'
import {useState} from 'react';
function App() {
  const [score , setScore] = useState(0);
  const clickHandle = (e) =>
  {
      let [addedScore, scoreType] = e.target.textContent.split("-");
      addedScore = parseInt(addedScore);
      console.log(e.target.textContent)
      if (scoreType === "Kill")
      {
          setScore(score+addedScore);
      }
      else
      {
          setScore(score-addedScore);
      }
  }
  return (
    <div className="App">
      <h1>counter app strike?</h1>
      <section>
        <Viewer count = {score}/>
      </section>
      <section>
        <Controller clickHandle = {clickHandle}/>
      </section>
    </div>
  );
}

export default App;
