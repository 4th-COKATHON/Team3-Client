import star1 from "./../../assets/ShowWeather/Star1.svg";
import star2 from "./../../assets/ShowWeather/Star2.svg";
import star3 from "./../../assets/ShowWeather/Star3.svg";
import cloud from "./../../assets/ShowWeather/Cloud.svg";
import sun from "./../../assets/ShowWeather/Sun.svg";
import rain from "./../../assets/ShowWeather/Rain.svg";
import snow from "./../../assets/ShowWeather/Snow.svg";
import cloudfilm from "./../../assets/ShowWeather/CloudFilm.svg";
import sunfilm from "./../../assets/ShowWeather/SunFilm.svg";
import rainfilm from "./../../assets/ShowWeather/RainFilm.svg";
import snowfilm from "./../../assets/ShowWeather/SnowFilm.svg";
import newjeans5 from "./../../assets/ShowWeather/newjeans5.avif";
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
        <img className="film" src={cloudfilm} alt="cloudfilm" />
        <img className="star1" src={star1} alt="star1" />
        <img className="star2" src={star2} alt="star2" />
        <img className="star3" src={star3} alt="star3" />
      </div>
      <ShowWrapper>
        <DateBox>
          <img src={cloud} alt="cloud" />
        </DateBox>
        <ImgWrapper>
          <ImgCard>
            <img src={newjeans5} alt="newjeans5" />
          </ImgCard>
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
