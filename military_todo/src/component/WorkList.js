import "./WorkList.css"
import WorkItem from "./WorkItem"
import {useState} from "react"

const WorkList = ({work,onDelete,onUpdate}) => {
    const [queryData,setQueryData] = useState("");
    const onInputChange = (event) => {
      setQueryData(event.target.value);      
    }
    const spreadString = (string) => {
      let spreadedString = ""
      const choseongs = [
        "ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ",
        "ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ",
        "ㅋ","ㅌ","ㅍ","ㅎ"
      ] 
      const jungseongs = [
        "ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ",
        "ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ",
        "ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ",
        "ㅢ","ㅣ"
      ]
      const jongseongs = [
        "","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ",
        "ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ",
        "ㅅ","ㅆ","ㅇ","ㅈ","ㅊ",
        "ㅋ","ㅌ","ㅍ","ㅎ" 
      ]

      for (let i = 0; i < string.length; i++)
      {
        let nowCharCode = string[i].charCodeAt(0); 
        if ("가".charCodeAt(0) <= nowCharCode && nowCharCode <="힣".charCodeAt(0))
        {
          const hangulCharOrder = nowCharCode - "가".charCodeAt(0);
          const choseongOrder = parseInt(hangulCharOrder / (21 * 28));
          const jungseongOrder = parseInt((hangulCharOrder % (21 * 28)) / 28);
          const jongseongOrder = parseInt((hangulCharOrder % (21 * 28)) % 28);
          spreadedString += choseongs[choseongOrder];
          spreadedString += jungseongs[jungseongOrder];
          spreadedString += jongseongs[jongseongOrder];
        }
        else
        {
          spreadedString += string[i];
        }
      }
      return spreadedString;
    } 

    return (
      <div className = "WorkList">
          <p>작업목록표</p>
          <input className = "searchbar" placeholder = "작업 검색" onChange={onInputChange} ></input>
          <div className = "list_wrapper">
            {work.map((it) => {
              if (it.name.includes(queryData))
              {
                return <WorkItem key = {it.id} {...it} onDelete={onDelete} onUpdate={onUpdate}/>;
              } 
              return null;
            })}
          </div>
      </div>  
    );
}

export default WorkList;