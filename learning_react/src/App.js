import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';


function App() {
  const appDescription = {
    fisrtLine : `이 React 앱은 곤충🐜이 머리-가슴-배로 이루어져 있듯이,`,
    secondLine : `Header💀-Body🦴-Footer🦶로 이루어져 있습니다.` 
  }
  // JSX에서는 모든 태그를 큰 최상위 태그로 감싸야 함
  return (
    <div className="App">
      {/*JSX에서 자바스크립트 표현식 사용
      (반환 값이 : number,string,boolean,null,undefined 일때 만!*/}
      <p>{appDescription.fisrtLine}</p>
      <p>{appDescription.secondLine}</p>
      { /*self-closing tag(모든 태그는 닫힘 규칙 적용) : 항상 마지막에 /을 붙혀줘야함 
      Header 컴포넌트를 App 컴포넌트의 자식 컴포넌트로 '배치' */}
      <Header/>
      <Body/>
      <Footer/> 
    </div>
  );
}

export default App;
