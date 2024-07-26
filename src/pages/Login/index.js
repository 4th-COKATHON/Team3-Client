import { BaseContainer, LoginText, LoginButton } from "./styles.js";
import { ReactComponent as LoginIcon } from "../../assets/Login/Login.svg";

const Login = () => {
  const onClick = () => {};
  return (
    <BaseContainer>
      <LoginText>Login</LoginText>
      <LoginButton onClick={onClick}>
        <LoginIcon />
        구글 계정으로 시작하기
      </LoginButton>
    </BaseContainer>
  );
};

export default Login;
