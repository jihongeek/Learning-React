# 육군표준작업계획표
## 요구사항
1. 오늘의 날짜와 전역까지 남은 날짜를 아래와 같은 양식으로 표시한다.  
     

   ```
   충성!
   금일은 2023년 6월 13일 월요일
   전역까지 D-119일 남았습니다.
   이상입니다.
   ```
2. 작업을 작성하는 입력 폼이 있고, <추가> 버튼을 클릭하면 작업 아이템을 생성하게 한다.
3. 작업 리스트의 작업 아이템을 키워드 검색으로 필터해서 표시하기
4. 작업 아이템은 작업을 완료했는지 표시할 수 있는   
   체크박스, 작업명, 추가 날짜, 작업을 삭제할 수 있는 삭제버튼으로 이루어져 있다.

## 컴포넌트
* Header : 오늘의 날짜 및 전역 D-Day를 위 요구사항에 맞게 보여준다.
* WorkEditor : 새로운 작업 아이템을 추가한다.
* WorkList : 검색어에 맞게 필터링된 작업 리스트를 렌더링 합니다. (But, 아무것도 없으면 필터링 X)
* WorkItem  : 낱개 작업아이템의 경우 기본정보(작업명, 추가날짜), 작업완료시 토글할 수 있는 체크박스, 삭제 버튼이 있다.