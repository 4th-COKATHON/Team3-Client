import styled from "styled-components";

export const MainLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #242321;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  margin-left: 95px;
  width: 383px;
  height: 791px;
  border-radius: 40px;
  border: 2px solid #fff;
  background-color: #ffc803;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .star1 {
    top: 103px;
    right: 0px;
    position: absolute;
  }

  .star2 {
    left: 0px;
    bottom: 61px;
    position: absolute;
  }
`;

export const ProfileImg = styled.div`
  width: 236px;
  height: 236px;
  background-color: #f5f5f5;
  border: 2px solid #242321;
  border-radius: 50%;
  margin-top: 56px;
  z-index: 10;
`;

export const ProfileName = styled.p`
  font-family: "PT-Bold";
  font-size: 30px;
  line-height: 20px;
  margin-top: 21px;
`;

export const Count = styled.div`
  margin-top: 95px;
  display: flex;
  width: 328px;
  padding: 4px 0px;
  flex-direction: column;
  border-radius: 15px;
  border: 2px solid #242321;
  background-color: #ffffff;
`;

export const Reel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #242321;
  margin: 4px 24px 4px 16px;

  .title {
    font-family: "PT-Regular";
    font-size: 20px;
  }
  .num {
    font-family: "PT-Bold";
    font-size: 34px;
  }
`;

export const Info = styled.div`
  width: 328px;
  height: 207px;
  gap: 16px;
  display: flex;
  z-index: 10;
  margin-top: 20px;
`;

export const InfoCard = styled.div`
  border-radius: 15px;
  border: 2px solid #242321;
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 156px;
  height: 207px;
  align-items: center;

  p {
    margin-top: 15.22px;
    font-family: "PT-Semibold";
    font-size: 29px;
    line-height: normal;
  }

  img {
    margin-top: 30px;
    width: 72px;
  }

  span {
    margin-top: 7.6px;
    line-height: normal;
    font-family: "PT-Regular";
    font-size: 26.6px;
  }
`;

export const ReelsWrapper = styled.div`
  margin-left: 56px;
  flex-grow: 1;
  height: 791px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Section = styled.section`
  width: 100%;
  height: 230px;
  display: flex;
  position: relative;

  .all {
    position: absolute;
    bottom: 0px;
    background-color: #ffc803;
    width: 100%;
    height: 12px;
  }

  .allImg {
    position: absolute;
    bottom: -140px;
    right: 0px;
  }

  .date {
    position: absolute;
    bottom: 0px;
    background-color: #ff7de2;
    width: 100%;
    height: 12px;
  }

  .dateImg {
    position: absolute;
    bottom: -37px;
    left: -24px;
  }

  .weather {
    position: absolute;
    bottom: 0px;
    background-color: #49dbc8;
    width: 100%;
    height: 12px;
  }

  .weatherImg {
    position: absolute;
    bottom: -69px;
    left: -44px;
  }
`;

export const NewReel = styled.div`
  width: 154px;
  height: 238px;
  border-radius: 30px;
  border: var(--Number, 3px) dashed #ffc803;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
  cursor: pointer;

  span {
    font-family: "PT-SemiBold";
    font-size: 24px;
    color: white;
    line-height: 1.53;
  }
  img {
    width: 24px;
    margin-top: 30px;
  }
`;
