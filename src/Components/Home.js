import React from "react";
import "../Styles/App.css";
import { Header, Divider, Container, Grid } from "semantic-ui-react";
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

        <Container fluid className="width40 mt-2" textAlign='center'>

          <Grid>

              <Grid.Row textAlign='center'>
              <Header as="h3" textAlign="center" color="red">
                Welcome to my website!
              </Header>
              </Grid.Row>

              <Grid.Row textAlign='center'>
              <Header as="h1" textAlign="center" className="white header-main">
            My name is David and I am Junior Front-end Developer
          </Header>{" "}
              </Grid.Row>

              <hr className="noBottom"/>
              
              <Grid.Row textAlign='center'>
                 <Divider horizontal className="red">
                 I invite you to get to know me
                 </Divider>
              </Grid.Row>

          </Grid>

          
        </Container>
      </Container>
    );
  }
}

export default Home;
