import { useNavigate } from "react-router";
import styled from "styled-components";

export const ConfirmWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 78px;
  gap: 21px;
`;

export const ConfirmButton = styled.button`
  width: 360px;
  height: 66px;
  border-radius: 100px;
  border: 0px;
  text-align: center;
  background-color: #9d968c;
  color: #f5f5f5;
  font-family: "PT-Bold";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ffc803;
    color: #242321;
  }
`;

const Confirm = () => {
  const nav = useNavigate();

  return (
    <ConfirmWrapper>
      <ConfirmButton onClick={() => nav(-1)}>취소</ConfirmButton>
      <ConfirmButton onClick={() => nav("/main")}>완료하기</ConfirmButton>
    </ConfirmWrapper>
  );
};

export default Confirm;
