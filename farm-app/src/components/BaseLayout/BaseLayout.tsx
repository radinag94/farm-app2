import Header from "./Header/Header";
import { Container } from "./BaseLayout.style";
import PropTypes from "prop-types";
import NavBar from "../Navbar/NavBar";

export const BaseLayout = ({ children }) => (
  <Container className={"AAA"}>
    <Header />
    {children}
  </Container>
);

BaseLayout.propTypes = {
  children: PropTypes.node,
};
