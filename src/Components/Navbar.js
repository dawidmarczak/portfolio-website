import React from "react";
import "../Styles/App.css";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="transparent mb-1">
          <Menu pointing secondary className="menu">
            <Link to="/">
              <Menu.Item name="home" className="menuItem" />{" "}
            </Link>

            <Link to="/about">
              <Menu.Item name="about me" className="menuItem" />{" "}
            </Link>

            <Link to="/projects">
              <Menu.Item name="skills and projects" className="menuItem" />
            </Link>

            <Link to="/contact">
              <Menu.Item name="contact" className="menuItem" />{" "}
            </Link>
          </Menu>
        </Container>
      </>
    );
  }
}

export default Navbar;
