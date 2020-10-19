import React from "react";
import "../Styles/App.css";
import { Header, Divider, Container } from "semantic-ui-react";
import Navbar from "./Navbar";

class Home extends React.Component {
  componentDidMount = () => {
    document.body.id = "main";
  };

  componentWillUnmount = () => {
    document.body.id = "";
  };

  render() {
    return (
      <Container className="fullPage">
        <Navbar />

        <Container fluid className="width40 mt-2">
          <Header as="h3" textAlign="center" color="red">
            Welcome to my website!
          </Header>
          <Header as="h1" textAlign="center" className="white header-main">
            My name is David and I am Junior Front-end Developer
          </Header>{" "}
          <br />
          <Divider horizontal className="red">
            I invite you to get to know me
          </Divider>
        </Container>
      </Container>
    );
  }
}

export default Home;
