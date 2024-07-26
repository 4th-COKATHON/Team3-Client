import {
  Card,
  Count,
  Info,
  InfoCard,
  MainContainer,
  MainLayout,
  ProfileImg,
  ProfileName,
  Reel,
} from "./styles";
import star1 from "./../../assets/Main/Star1.svg";
import star2 from "./../../assets/Main/Star2.svg";
import sunny from "./../../assets/Main/Sunny.svg";
import flower from "./../../assets/Main/Flower.svg";

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
        <div></div>
      </MainContainer>
    </MainLayout>
  );
};

export default Main;
