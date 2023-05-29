import "./Body.css";

const Body = (props) => {
    // 구조분해할당을 이용한 props 값들을 쉽게 쓰기
    const {language,emoji} = props
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
            </div>
        )

    }
}

export default Body;