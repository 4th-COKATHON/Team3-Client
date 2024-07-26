import { Logo, StartBtn, StartLayout } from "./styles";
import star1 from "./../../assets/Start/Star1.svg";
import star2 from "./../../assets/Start/Star2.svg";
import star3 from "./../../assets/Start/Star3.svg";
import star4 from "./../../assets/Start/Star4.svg";
import star5 from "./../../assets/Start/Star5.svg";
import logo from "./../../assets/Start/Logo.svg";
import { useNavigate } from "react-router";

const Start = () => {
  const nav = useNavigate();

  return (
    <StartLayout>
      <div>
        <img className="star1" src={star1} alt="star1" />
        <img className="star2" src={star2} alt="star2" />
        <img className="star3" src={star3} alt="star3" />
        <img className="star4" src={star4} alt="star4" />
        <img className="star5" src={star5} alt="star5" />
      </div>
      <Logo>
        <section>
          <img className="logo" src={logo} alt="logo" />
          <span>RECORD REEL</span>
        </section>
        <StartBtn onClick={() => nav("/login")}>
          <span>시작하기</span>
        </StartBtn>
      </Logo>
    </StartLayout>
  );
};

export default Start;
