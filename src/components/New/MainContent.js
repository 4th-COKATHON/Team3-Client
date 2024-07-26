// // import styled from "styled-components";
// // import React, { useState } from "react";
// // import { ReactComponent as Sun } from "../../assets/New/Sun.svg";
// // import { ReactComponent as Blur } from "../../assets/New/Blur.svg";
// // import { ReactComponent as Rain } from "../../assets/New/Rain.svg";
// // import { ReactComponent as Snow } from "../../assets/New/Snow.svg";
// // import { CalenderContainer, CalendarCore } from "./Calendar";

// // const Container = styled.div`
// //   width: 944px;
// //   height: 547px;
// //   border-radius: 40px;
// //   margin-top: 54px;
// //   background-color: #ffc803;
// //   border: 2px solid #ffffff;
// //   display: flex;
// // `;

// // const InputPhoto = styled.div`
// //   width: 343px;
// //   height: 343px;
// //   border-radius: 30px;
// //   border: 3px dashed #242321;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // const InputPhotoText1 = styled.div`
// //   color: #242321;
// //   text-align: center;
// //   font-size: 24px;
// //   font-style: normal;
// //   font-weight: 700;
// //   line-height: 153%;
// //   font-family: "PT-Bold";
// // `;

// // const InputPhotoText2 = styled.div`
// //   color: #242321;
// //   text-align: center;
// //   font-size: 14px;
// //   font-style: normal;
// //   font-weight: 400;
// //   line-height: 153%;
// //   font-family: "PT-Regular";
// // `;

// // const InputPhotoText3 = styled.div`
// //   width: 198px;
// //   height: 37px;
// //   border-radius: 32px;
// //   border: 2px solid #9d968c;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   color: #9d968c;
// //   text-align: center;
// //   font-family: "PT-Bold";
// //   font-size: 24px;
// //   font-style: normal;
// //   font-weight: 700;
// //   line-height: 153%;
// //   margin-top: 22px;
// // `;

// // const Title = styled.div`
// //   color: #242321;
// //   font-family: "kodakku";
// //   font-size: 50px;
// //   text-align: left;
// //   width: 357px;
// // `;

// // const CalendarWrapper = styled.div`
// //   border-radius: 18.311px;
// //   background: #f5f5f5;
// //   width: 357px;
// //   height: 353px;
// // `;

// // const Warpper = styled.div`
// //   margin: 56px;
// //   border-radius: 18.311px;
// //   display: flex;
// //   flex-direction: column;
// //   justify-content: space-between;
// //   align-items: center;
// // `;

// // const InputPhotoTitle = styled.div`
// //   padding: 10px 68px;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   gap: 8px;
// //   border: 2px solid #242321;
// //   border-radius: 100px;
// //   font-size: 24px;
// //   color: #242321;
// //   font-family: "PT-Bold";
// // `;

// // const WeatherWapper = styled.div`
// //   border-radius: 18.311px;
// //   width: 357px;
// //   height: 353px;
// //   display: flex;
// //   flex-wrap: wrap;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 10px;
// // `;

// // const WeatherInnerContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   width: 165px;
// //   height: 165px;
// //   align-items: center;
// //   justify-content: center;
// //   gap: 22.262px;
// //   border-radius: 17.553px;
// //   border: 2.585px solid #767067;
// //   color: #767067;
// //   text-align: center;
// //   font-family: "PT-Regular";
// //   font-size: 31.167px;
// //   font-weight: 400;
// //   line-height: normal;
// //   letter-spacing: -0.935px;
// //   cursor: pointer;
// //   background-color: ${(props) => (props.selected ? "#ffffff" : "transparent")};
// // `;

// // const AlwaysMainWarpper = styled.div`
// //   margin: 0 auto;
// //   margin-top: 56px;
// //   display: flex;
// //   flex-direction: column;
// //   gap: 40px;
// // `;

// // export const WeatherMain = () => {
// //   const [selectedWeather, setSelectedWeather] = useState("sun");

// //   const handleWeatherClick = (weather) => {
// //     setSelectedWeather(weather);
// //   };

// //   return (
// //     <Container>
// //       <Warpper>
// //         <Title>WEATHER REEL</Title>
// //         <WeatherWapper>
// //           <WeatherInnerContainer
// //             selected={selectedWeather === "sun"}
// //             onClick={() => handleWeatherClick("sun")}
// //           >
// //             <Sun />
// //             맑음
// //           </WeatherInnerContainer>
// //           <WeatherInnerContainer
// //             selected={selectedWeather === "blur"}
// //             onClick={() => handleWeatherClick("blur")}
// //           >
// //             <Blur />
// //             흐림
// //           </WeatherInnerContainer>
// //           <WeatherInnerContainer
// //             selected={selectedWeather === "rain"}
// //             onClick={() => handleWeatherClick("rain")}
// //           >
// //             <Rain />비
// //           </WeatherInnerContainer>
// //           <WeatherInnerContainer
// //             selected={selectedWeather === "snow"}
// //             onClick={() => handleWeatherClick("snow")}
// //           >
// //             <Snow />눈
// //           </WeatherInnerContainer>
// //         </WeatherWapper>
// //       </Warpper>
// //       <Warpper>
// //         <InputPhotoTitle>
// //           "
// //           {selectedWeather === "sun"
// //             ? "맑음"
// //             : selectedWeather === "blur"
// //               ? "흐림"
// //               : selectedWeather === "rain"
// //                 ? "비"
// //                 : "눈"}
// //           "
// //         </InputPhotoTitle>
// //         <InputPhoto>
// //           <InputPhotoText1>REEL에 넣을</InputPhotoText1>
// //           <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
// //           <InputPhotoText2>(최대 nn장)</InputPhotoText2>
// //           <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
// //         </InputPhoto>
// //       </Warpper>
// //     </Container>
// //   );
// // };

// // export const DateMain = () => {
// //   return (
// //     <Container>
// //       <Warpper>
// //         <Title>DATE REEL</Title>
// //         <CalendarWrapper>
// //           <Schedule />
// //         </CalendarWrapper>
// //       </Warpper>
// //       <Warpper>
// //         <InputPhotoTitle>2024년 7월 27일</InputPhotoTitle>
// //         <InputPhoto>
// //           <InputPhotoText1>REEL에 넣을</InputPhotoText1>
// //           <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
// //           <InputPhotoText2>(최대 nn장)</InputPhotoText2>
// //           <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
// //         </InputPhoto>
// //       </Warpper>
// //     </Container>
// //   );
// // };

// // export const AlwaysMain = () => {
// //   return (
// //     <Container>
// //       <AlwaysMainWarpper>
// //         <Title>ALWAYSS REEL</Title>
// //         <InputPhoto>
// //           <InputPhotoText1>REEL에 넣을</InputPhotoText1>
// //           <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
// //           <InputPhotoText2>(최대 nn장)</InputPhotoText2>
// //           <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
// //         </InputPhoto>
// //       </AlwaysMainWarpper>
// //     </Container>
// //   );
// // };

// // const MainContent = () => {
// //   return <Container></Container>;
// // };

// // export default MainContent;

// // const Schedule = () => {
// //   const [date, setDate] = useState(new Date());
// //   const [selectedSchedule, setSelectedSchedule] = useState([]);

// //   const formattedDate = `${date.getFullYear()}년 ${
// //     date.getMonth() + 1
// //   }월 ${date.getDate()}일`;

// //   const onChange = (newDate) => {
// //     setDate(newDate);
// //   };

// //   const formatShortWeekday = (locale, date) => {
// //     const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
// //     return weekdays[date.getDay()];
// //   };

// //   const onClickDay = (value) => {
// //     onChange(value);
// //   };

// //   return (
// //     <CalenderContainer>
// //       <CalendarCore
// //         value={date}
// //         onChange={onChange}
// //         onClickDay={onClickDay}
// //         formatDay={(locale, date) => date.getDate()}
// //         navigationLabel={({ date, view }) => `${date.getMonth() + 1}월`}
// //         formatShortWeekday={formatShortWeekday}
// //       />
// //     </CalenderContainer>
// //   );
// // };
// import styled from "styled-components";
// import React, { useState } from "react";
// import { ReactComponent as Sun } from "../../assets/New/Sun.svg";
// import { ReactComponent as Blur } from "../../assets/New/Blur.svg";
// import { ReactComponent as Rain } from "../../assets/New/Rain.svg";
// import { ReactComponent as Snow } from "../../assets/New/Snow.svg";
// import { CalenderContainer, CalendarCore } from "./Calendar";

// const Container = styled.div`
//   width: 944px;
//   height: 547px;
//   border-radius: 40px;
//   margin-top: 54px;
//   background-color: #ffc803;
//   border: 2px solid #ffffff;
//   display: flex;
// `;

// const InputPhoto = styled.div`
//   width: 343px;
//   height: 343px;
//   border-radius: 30px;
//   border: 3px dashed #242321;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const InputPhotoText1 = styled.div`
//   color: #242321;
//   text-align: center;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 153%;
//   font-family: "PT-Bold";
// `;

// const InputPhotoText2 = styled.div`
//   color: #242321;
//   text-align: center;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 153%;
//   font-family: "PT-Regular";
// `;

// const InputPhotoText3 = styled.div`
//   width: 198px;
//   height: 37px;
//   border-radius: 32px;
//   border: 2px solid #9d968c;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #9d968c;
//   text-align: center;
//   font-family: "PT-Bold";
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 153%;
//   margin-top: 22px;
// `;

// const Title = styled.div`
//   color: #242321;
//   font-family: "kodakku";
//   font-size: 50px;
//   text-align: left;
//   width: 357px;
// `;

// const CalendarWrapper = styled.div`
//   border-radius: 18.311px;
//   background: #f5f5f5;
//   width: 357px;
//   height: 353px;

// `;

// const Wrapper = styled.div`
//   margin: 56px;
//   border-radius: 18.311px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `;

// const InputPhotoTitle = styled.div`
//   padding: 10px 68px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   border: 2px solid #242321;
//   border-radius: 100px;
//   font-size: 24px;
//   color: #242321;
//   font-family: "PT-Bold";
// `;

// const WeatherWrapper = styled.div`
//   border-radius: 18.311px;
//   width: 357px;
//   height: 353px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
// `;

// const WeatherInnerContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 165px;
//   height: 165px;
//   align-items: center;
//   justify-content: center;
//   gap: 22.262px;
//   border-radius: 17.553px;
//   border: 2.585px solid #767067;
//   color: #767067;
//   text-align: center;
//   font-family: "PT-Regular";
//   font-size: 31.167px;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.935px;
//   cursor: pointer;
//   background-color: ${(props) => (props.selected ? "#ffffff" : "transparent")};
// `;

// const AlwaysMainWrapper = styled.div`
//   margin: 0 auto;
//   margin-top: 56px;
//   display: flex;
//   flex-direction: column;
//   gap: 40px;
// `;

// export const WeatherMain = () => {
//   const [selectedWeather, setSelectedWeather] = useState("sun");

//   const handleWeatherClick = (weather) => {
//     setSelectedWeather(weather);
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <Title>WEATHER REEL</Title>
//         <WeatherWrapper>
//           <WeatherInnerContainer
//             selected={selectedWeather === "sun"}
//             onClick={() => handleWeatherClick("sun")}
//           >
//             <Sun />
//             맑음
//           </WeatherInnerContainer>
//           <WeatherInnerContainer
//             selected={selectedWeather === "blur"}
//             onClick={() => handleWeatherClick("blur")}
//           >
//             <Blur />
//             흐림
//           </WeatherInnerContainer>
//           <WeatherInnerContainer
//             selected={selectedWeather === "rain"}
//             onClick={() => handleWeatherClick("rain")}
//           >
//             <Rain />비
//           </WeatherInnerContainer>
//           <WeatherInnerContainer
//             selected={selectedWeather === "snow"}
//             onClick={() => handleWeatherClick("snow")}
//           >
//             <Snow />눈
//           </WeatherInnerContainer>
//         </WeatherWrapper>
//       </Wrapper>
//       <Wrapper>
//         <InputPhotoTitle>
//           "
//           {selectedWeather === "sun"
//             ? "맑음"
//             : selectedWeather === "blur"
//               ? "흐림"
//               : selectedWeather === "rain"
//                 ? "비"
//                 : "눈"}
//           "
//         </InputPhotoTitle>
//         <InputPhoto>
//           <InputPhotoText1>REEL에 넣을</InputPhotoText1>
//           <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
//           <InputPhotoText2>(최대 nn장)</InputPhotoText2>
//           <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
//         </InputPhoto>
//       </Wrapper>
//     </Container>
//   );
// };

// export const DateMain = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Title>DATE REEL</Title>
//         <CalendarWrapper>
//           <Schedule />
//         </CalendarWrapper>
//       </Wrapper>
//       <Wrapper>
//         <InputPhotoTitle>2024년 7월 27일</InputPhotoTitle>
//         <InputPhoto>
//           <InputPhotoText1>REEL에 넣을</InputPhotoText1>
//           <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
//           <InputPhotoText2>(최대 nn장)</InputPhotoText2>
//           <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
//         </InputPhoto>
//       </Wrapper>
//     </Container>
//   );
// };

// export const AlwaysMain = () => {
//   return (
//     <Container>
//       <AlwaysMainWrapper>
//         <Title>ALWAYS REEL</Title>
//         <InputPhoto>
//           <InputPhotoText1>REEL에 넣을</InputPhotoText1>
//           <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
//           <InputPhotoText2>(최대 nn장)</InputPhotoText2>
//           <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
//         </InputPhoto>
//       </AlwaysMainWrapper>
//     </Container>
//   );
// };

// const Schedule = () => {
//   const [date, setDate] = useState(new Date());
//   const [selectedSchedule, setSelectedSchedule] = useState([]);

//   const formattedDate = `${date.getFullYear()}년 ${
//     date.getMonth() + 1
//   }월 ${date.getDate()}일`;

//   const onChange = (newDate) => {
//     setDate(newDate);
//   };

//   const formatShortWeekday = (locale, date) => {
//     const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
//     return weekdays[date.getDay()];
//   };

//   const onClickDay = (value) => {
//     onChange(value);
//   };

//   return (
//     <CalenderContainer>
//       <CalendarCore
//         value={date}
//         onChange={onChange}
//         onClickDay={onClickDay}
//         formatDay={(locale, date) => date.getDate()}
//         navigationLabel={({ date, view }) => `${date.getMonth() + 1}월`}
//         formatShortWeekday={formatShortWeekday}
//       />
//     </CalenderContainer>
//   );
// };

import styled from "styled-components";
import React, { useState } from "react";
import { ReactComponent as Sun } from "../../assets/New/Sun.svg";
import { ReactComponent as Blur } from "../../assets/New/Blur.svg";
import { ReactComponent as Rain } from "../../assets/New/Rain.svg";
import { ReactComponent as Snow } from "../../assets/New/Snow.svg";
import { CalenderContainer, CalendarCore } from "./Calendar";

const Container = styled.div`
  width: 944px;
  height: 547px;
  border-radius: 40px;
  margin-top: 54px;
  background-color: #ffc803;
  border: 2px solid #ffffff;
  display: flex;
`;

const InputPhoto = styled.div`
  width: 343px;
  height: 343px;
  border-radius: 30px;
  border: 3px dashed #242321;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputPhotoText1 = styled.div`
  color: #242321;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 153%;
  font-family: "PT-Bold";
`;

const InputPhotoText2 = styled.div`
  color: #242321;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 153%;
  font-family: "PT-Regular";
`;

const InputPhotoText3 = styled.div`
  width: 198px;
  height: 37px;
  border-radius: 32px;
  border: 2px solid #9d968c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9d968c;
  text-align: center;
  font-family: "PT-Bold";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 153%;
  margin-top: 22px;
`;

const Title = styled.div`
  color: #242321;
  font-family: "kodakku";
  font-size: 50px;
  text-align: left;
  width: 357px;
`;

const CalendarWrapper = styled.div`
  border-radius: 18.311px;
  background: #f5f5f5;
  width: 357px;
  height: 353px;
`;

const Wrapper = styled.div`
  margin: 56px;
  border-radius: 18.311px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InputPhotoTitle = styled.div`
  padding: 10px 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 2px solid #242321;
  border-radius: 100px;
  font-size: 24px;
  color: #242321;
  font-family: "PT-Bold";
`;

const WeatherWrapper = styled.div`
  border-radius: 18.311px;
  width: 357px;
  height: 353px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const WeatherInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 165px;
  align-items: center;
  justify-content: center;
  gap: 22.262px;
  border-radius: 17.553px;
  border: 2.585px solid #767067;
  color: #767067;
  text-align: center;
  font-family: "PT-Regular";
  font-size: 31.167px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.935px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#ffffff" : "transparent")};
`;

const AlwaysMainWrapper = styled.div`
  margin: 0 auto;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const WeatherMain = () => {
  const [selectedWeather, setSelectedWeather] = useState("sun");

  const handleWeatherClick = (weather) => {
    setSelectedWeather(weather);
  };

  return (
    <Container>
      <Wrapper>
        <Title>WEATHER REEL</Title>
        <WeatherWrapper>
          <WeatherInnerContainer
            selected={selectedWeather === "sun"}
            onClick={() => handleWeatherClick("sun")}
          >
            <Sun />
            맑음
          </WeatherInnerContainer>
          <WeatherInnerContainer
            selected={selectedWeather === "blur"}
            onClick={() => handleWeatherClick("blur")}
          >
            <Blur />
            흐림
          </WeatherInnerContainer>
          <WeatherInnerContainer
            selected={selectedWeather === "rain"}
            onClick={() => handleWeatherClick("rain")}
          >
            <Rain />비
          </WeatherInnerContainer>
          <WeatherInnerContainer
            selected={selectedWeather === "snow"}
            onClick={() => handleWeatherClick("snow")}
          >
            <Snow />눈
          </WeatherInnerContainer>
        </WeatherWrapper>
      </Wrapper>
      <Wrapper>
        <InputPhotoTitle>
          "
          {selectedWeather === "sun"
            ? "맑음"
            : selectedWeather === "blur"
              ? "흐림"
              : selectedWeather === "rain"
                ? "비"
                : "눈"}
          "
        </InputPhotoTitle>
        <InputPhoto>
          <InputPhotoText1>REEL에 넣을</InputPhotoText1>
          <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
          <InputPhotoText2>(최대 nn장)</InputPhotoText2>
          <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
        </InputPhoto>
      </Wrapper>
    </Container>
  );
};

export const DateMain = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formattedDate = `${selectedDate.getFullYear()}년 ${
    selectedDate.getMonth() + 1
  }월 ${selectedDate.getDate()}일`;

  return (
    <Container>
      <Wrapper>
        <Title>DATE REEL</Title>
        <CalendarWrapper>
          <Schedule onDateChange={handleDateChange} />
        </CalendarWrapper>
      </Wrapper>
      <Wrapper>
        <InputPhotoTitle>{formattedDate}</InputPhotoTitle>
        <InputPhoto>
          <InputPhotoText1>REEL에 넣을</InputPhotoText1>
          <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
          <InputPhotoText2>(최대 nn장)</InputPhotoText2>
          <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
        </InputPhoto>
      </Wrapper>
    </Container>
  );
};

export const AlwaysMain = () => {
  return (
    <Container>
      <AlwaysMainWrapper>
        <Title>ALWAYS REEL</Title>
        <InputPhoto>
          <InputPhotoText1>REEL에 넣을</InputPhotoText1>
          <InputPhotoText1>사진을 선택해주세요</InputPhotoText1>
          <InputPhotoText2>(최대 nn장)</InputPhotoText2>
          <InputPhotoText3>이미지 파일 업로드</InputPhotoText3>
        </InputPhoto>
      </AlwaysMainWrapper>
    </Container>
  );
};

const MainContent = () => {
  return <Container></Container>;
};

export default MainContent;

const Schedule = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  const formatShortWeekday = (locale, date) => {
    const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
    return weekdays[date.getDay()];
  };

  const onClickDay = (value) => {
    handleChange(value);
  };

  return (
    <CalenderContainer>
      <CalendarCore
        value={date}
        onChange={handleChange}
        onClickDay={onClickDay}
        formatDay={(locale, date) => date.getDate()}
        navigationLabel={({ date, view }) => `${date.getMonth() + 1}월`}
        formatShortWeekday={formatShortWeekday}
      />
    </CalenderContainer>
  );
};
