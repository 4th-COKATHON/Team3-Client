import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export const CalenderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  border-radius: 15px;

  //기본 캘린더 css속성
  .react-calendar {
    border: 0px;
    width: 100%;
    // line-height: 1.125em;
    line-height: 36px;
    color: #475467;
  }
  //연도 버튼 제거
  .react-calendar__navigation button:nth-child(1),
  .react-calendar__navigation button:nth-child(5) {
    display: none;
  }
  .react-calendar__navigation button {
    color: #475467;
    font-size: 20px;
    font-weight: 600;
    line-height: 18px;
  }

  //요일 밑줄 제거
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }
  //주말 글씨 빨간색 해제
  .react-calendar__month-view__days__day--weekend {
    color: #000000;
  }
  //일 간격 설정
  .react-calendar__tile {
    padding: 8px 16px 8px 16px;
    position: relative;
  }
  //이웃 달 글씨 연하게
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #98a2b3;
  }
  // 선택된 날짜 노란색
  .react-calendar__tile--active,
  .react-calendar__tile--hasActive {
    background: #ffc803;
    color: #000;
  }
`;

export const CalendarCore = styled(Calendar)``;
