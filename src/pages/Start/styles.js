import styled from "styled-components";

export const StartLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #242321;
  color: white;
  position: relative;
  overflow: hidden;

  span {
  }
  .film,
  .star1,
  .star2,
  .star3,
  .star4,
  .star5 {
    position: absolute;
  }

  .film {
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .star1 {
    left: 184px;
  }

  .star2 {
    top: 174px;
    right: 0px;
  }

  .star3 {
    bottom: 70px;
  }

  .star4 {
    bottom: 164px;
    right: 494px;
  }

  .star5 {
    right: 69px;
    bottom: 0px;
  }
`;

export const Logo = styled.div`
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    z-index: 100;
    margin-right: 20px;
  }

  span {
    z-index: 100;
    font-family: "kodakku";
    font-size: 144px;
  }
`;

export const StartBtn = styled.div`
  z-index: 100;
  margin-top: 47px;
  width: 214px;
  height: 66px;
  border-radius: 100px;
  background-color: #ffc803;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #ffd56a;
    transition: background-color 0.1s;
  }

  span {
    font-family: "PT-Bold";
    font-size: 30px;
    color: #2a2a2a;
  }
`;
