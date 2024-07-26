import film from "./../../assets/ShowWeather/Film.svg";
import star1 from "./../../assets/ShowWeather/Star1.svg";
import star2 from "./../../assets/ShowWeather/Star2.svg";
import star3 from "./../../assets/ShowWeather/Star3.svg";
import cloud from "./../../assets/ShowWeather/Cloud.svg";
import {
  DateBox,
  ImgCard,
  ImgWrapper,
  ShowLayout,
  ShowWrapper,
} from "./styles";

const ShowWeather = () => {
  return (
    <ShowLayout>
      <div>
        <img className="film" src={film} alt="film" />
        <img className="star1" src={star1} alt="star1" />
        <img className="star2" src={star2} alt="star2" />
        <img className="star3" src={star3} alt="star3" />
      </div>
      <ShowWrapper>
        <DateBox>
          <img src={cloud} alt="cloud" />
        </DateBox>
        <ImgWrapper>
          <ImgCard></ImgCard>
          <ImgCard></ImgCard>
          <ImgCard></ImgCard>
          <ImgCard></ImgCard>
          <ImgCard></ImgCard>
          <ImgCard></ImgCard>
        </ImgWrapper>
      </ShowWrapper>
    </ShowLayout>
  );
};

export default ShowWeather;
