import film from "./../../assets/ShowDate/Film.svg";
import star1 from "./../../assets/ShowDate/Star1.svg";
import star2 from "./../../assets/ShowDate/Star2.svg";
import star3 from "./../../assets/ShowDate/Star3.svg";
import newjeans4 from "./../../assets/ShowDate/newjeans4.avif";
import {
  DateBox,
  ImgCard,
  ImgWrapper,
  ShowLayout,
  ShowWrapper,
} from "./styles";

const ShowDate = () => {
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
          <span>2024년 7월 27일</span>
        </DateBox>
        <ImgWrapper>
          <ImgCard>
            <img src={newjeans4} alt="newjeans4" />
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

export default ShowDate;
