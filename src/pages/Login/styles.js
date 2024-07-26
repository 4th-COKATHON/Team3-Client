import styled from "styled-components";

export const BaseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #242321;
`;

export const LoginText = styled.div`
  color: #f5f5f5;
  font-family: "kodakku";
  line-height: 120px;
  font-size: 144px;
`;

export const LoginButton = styled.div`
  width: 345px;
  height: 54px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #eeedec;
  font-size: 20px;
  font-weight: 400px;
  border: 1px solid #eeedec;
  font-family: "PT-Medium";
`;
