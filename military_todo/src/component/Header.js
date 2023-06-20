import "./Header.css";
const getDischargeDday = (nowDate,dischargeDate) => {
    console.log(dischargeDate);
    return Math.floor((dischargeDate.valueOf() - nowDate.valueOf()) / (1000 * 60 * 60 * 24))
}

const dateToKoreanDateString = (dateToConvert) => {
    let koreanDateString = ""
    const dayConversionArray = ["일","월","화","수","목","금","토"]
    
    koreanDateString += `${dateToConvert.getFullYear()}년 `;
    koreanDateString += `${dateToConvert.getMonth()+1}월 `;
    koreanDateString += `${dateToConvert.getDate()}일 `;
    koreanDateString += `${dayConversionArray[dateToConvert.getDay()]}요일`;

    return koreanDateString

} 
const Header = () => {
    const nowDate = new Date()
    return (
        <div className = "Header">
            <h1 style = {{color:"rgb(42,80,52)"}}>충성!👊</h1>
            <p>
                <span>금일은</span> <span style={{color : "rgb(0,73,153)"}}>{dateToKoreanDateString(nowDate)}</span><span>.</span>
            </p>
            {/* 한국군은 전역일 당일 24시까지 군인*/}
            <p>
                <span>전역까지</span> <span style={{color : "rgb(239,196,0)"}}> D-{getDischargeDday(nowDate,new Date(2023,10-1,10+1))}일</span> <span>남았습니다.</span> 
            </p>
            <p>이상입니다.</p>
        </div>
    );
}

export default Header;