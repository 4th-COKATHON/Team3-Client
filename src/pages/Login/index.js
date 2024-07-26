import { BaseContainer, LoginText, LoginButton } from "./styles.js";
import { ReactComponent as LoginIcon } from "../../assets/Login/Login.svg";
import { useNavigate } from "react-router";

const Login = () => {
  const nav = useNavigate();
  return (
    <BaseContainer>
      <LoginText>Login</LoginText>
      <LoginButton
        onClick={() => {
          nav("/main");
        }}
      >
        <LoginIcon />
        구글 계정으로 시작하기
      </LoginButton>
    </BaseContainer>
  );
};

export default Login;
