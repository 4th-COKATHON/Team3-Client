import {
  Card,
  Count,
  Info,
  InfoCard,
  MainContainer,
  MainLayout,
  NewReel,
  ProfileImg,
  ProfileName,
  Reel,
  ReelsWrapper,
  Section,
} from "./styles";
import star1 from "./../../assets/Main/Star1.svg";
import star2 from "./../../assets/Main/Star2.svg";
import star3 from "./../../assets/Main/Star3.svg";
import star4 from "./../../assets/Main/Star4.svg";
import star5 from "./../../assets/Main/Star5.svg";
import sunny from "./../../assets/Main/Sunny.svg";
import flower from "./../../assets/Main/Flower.svg";
import plus from "./../../assets/Main/plus.svg";

const Main = () => {
  return (
    <MainLayout>
      <MainContainer>
        <Card>
          <img className="star1" src={star1} alt="star1" />
          <img className="star2" src={star2} alt="star2" />
          <ProfileImg></ProfileImg>
          <ProfileName>홍길동</ProfileName>
          <Count>
            <Reel>
              <span className="title">RECORD REEL 개수</span>
              <span className="num">0</span>
            </Reel>
            <Reel>
              <span className="title">개봉 가능한 REEL</span>
              <span className="num">0</span>
            </Reel>
          </Count>
          <Info>
            <InfoCard>
              <p>오늘의 날씨</p>
              <img src={sunny} />
              <span>맑음</span>
            </InfoCard>
            <InfoCard>
              <p>이달의 꽃</p>
              <img src={flower} />
              <span>수국</span>
            </InfoCard>
          </Info>
        </Card>
        <ReelsWrapper>
          <Section>
            <NewReel>
              <span>새로운 REEL</span>
              <span>만들기</span>
              <img src={plus} alt="plus" />
            </NewReel>
            <div className="all"></div>
            <img className="allImg" src={star3} alt="star3" />
          </Section>
          <Section>
            <div className="date"></div>
            <img className="dateImg" src={star4} alt="star4" />
          </Section>
          <Section>
            <div className="weather"></div>
            <img className="weatherImg" src={star5} alt="star5" />
          </Section>
        </ReelsWrapper>
      </MainContainer>
    </MainLayout>
  );
};

export default Main;
