import "./Body.css";

// useState 함수 리액트에서 불러오기
import { useState } from "react";

// 구조분해할당을 함수컴포넌트의 매개변수에 이용해 Props를 쉽게 사용하기
// App 컴포넌트에서 배치한 자식 컴포넌트를 children 프로퍼티로 불러오기
const Body = ({emoji,children}) => {
    // state 설정 -> state가 set 함수에 의해 변경되면 다시 호출 => 리렌더링
    const [language, setLanguage] = useState("korean");
    
    const handleChangeButtonOnClick = () => {
        if (language === "korean")
        {
            setLanguage("english");
        }
        else {
            setLanguage("korean");
        }
    }
    // 조건문을 이용한 조건부 렌더링
    if (language === "korean")
    {
        return (
            // JSX 방식으로 class 대신 className 사용
            // style에 style 객체를 넘겨줘서 인라인 스타일링 구현
            <div className = "body" style = {{color : "green"}}>
                <h1>My Body 🦴</h1>
                <p>이 리액트 앱의 '몸뚱아리'랍니다.</p>    
                <p>{emoji}</p>
                {children}
                <button onClick = {handleChangeButtonOnClick}>English</button>
            </div>
        )   
    }
    else
    {
        return (
            <div className = "body" style = {{color : "crimson"}}>
                <h1>My Body 🦴</h1>
                <p>Here is 'BODY' of this React app.</p>    
                <p>{emoji}</p>
                {children}
                <button onClick = {handleChangeButtonOnClick}>Korean</button>
            </div>
        )

    }
}
Body.defaultProps = {
    emoji : "✈️"
}
export default Body;