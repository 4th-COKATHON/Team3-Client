import styled from "styled-components";

export const ShowLayout = styled.div`
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
  .star3 {
    position: absolute;
  }

  .film {
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .star1 {
    top: 131px;
    right: 29px;
  }

  .star2 {
    bottom: 0px;
    left: 0px;
  }

  .star3 {
    right: 127px;
    bottom: 63px;
  }
`;

export const ShowWrapper = styled.div`
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const DateBox = styled.div`
  z-index: 100;
  background-color: #ffc803;
  border: 2px solid #f5f5f5;
  border-radius: 100px;
  margin-top: 113px;
  width: 314px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  span {
    font-family: "PT-Bold";
    font-size: 24px;
    color: #242321;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 72px;
  margin-left: 480px;
  overflow-x: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImgCard = styled.div`
  z-index: 100;
  width: 390px;
  height: 538px;
  border-radius: 28px;
  background-color: #cdcdcd;
  min-width: 390px;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 28px;
  }
`;
