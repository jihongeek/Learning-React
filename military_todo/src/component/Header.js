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
            <h1>충성!👊</h1>
            <h2>금일은 {dateToKoreanDateString(nowDate)}.</h2>
            {/* 한국군은 전역일 당일 24시까지 군인*/}
            <h2>전역까지 D-{getDischargeDday(nowDate,new Date(2023,10-1,10+1))}일
            남았습니다. 
            </h2>
            <h1>이상입니다.</h1>
        </div>
    );
}

export default Header;