import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      { /*self-closing tag : 항상 마지막에 /을 붙혀줘야함 
      Header 컴포넌트를 App 컴포넌트의 자식 컴포넌트로 '배치' */}
      <Header/>
      <Body/>
      <Footer/> 
    </div>
  );
}

export default App;
