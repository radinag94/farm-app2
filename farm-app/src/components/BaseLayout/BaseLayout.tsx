import Header from "./Header/Header";
import { Container } from "./BaseLayout.style";
import GlobalLoadingIndicator from "../../global/GlobalLoadingIndicator";
import { BaseLayoutProps } from "../statics/interfaces";



export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => (
  <Container className={"AAA"}>
    <Header />
    <GlobalLoadingIndicator />
    {children}
  </Container>
);


