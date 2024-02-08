import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { LoginFormData } from "../../components/statics/interfaces";
import { LoginPageProps } from "../../components/statics/interfaces";
import { LoginPageContainer } from "./LoginPage.style";

const LoginPage: React.FC<LoginPageProps> = () => {
  const handleFormSubmit = (loginFormData: LoginFormData) => {
    console.log("Form submitted:", loginFormData);
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleFormSubmit} />
    </LoginPageContainer>
  );
};

export default LoginPage;
