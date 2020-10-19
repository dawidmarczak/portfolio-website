/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../Styles/App.css";
import { Header, Grid, Image, Divider } from "semantic-ui-react";
import Navbar from "./Navbar";

class Contact extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <hr />
        <div className="center">
          <Header as="h2" className="header-about mb-0 red">
            Contact
          </Header>
        </div>

        <Header as="h5" className="subheader-about3" textAlign="center">
          Thank you very much for visiting this website and familiarizing
          yourself with my projects and skills. <br /> If you are interested in
          my person, please contact me.
        </Header>

        <Divider className="width50 red centerMargin" horizontal>
          E-mail
        </Divider>

        <Grid stackable divided>
          <Grid.Row textAlign="center" verticalAlign="middle">
            <p className="contact-text mt-1 mb-1">dawid.marczak98@gmail.com</p>
          </Grid.Row>
        </Grid>

        <Divider className="width50 red centerMargin" horizontal>
          Linkedin
        </Divider>

        <Grid stackable divided>
          <Grid.Row textAlign="center" verticalAlign="middle">
            <a
              href="https://www.linkedin.com/in/dawid-marczak/"
              target="_blank"
            >
              <p className="contact-text mt-1 mb-1">
                www.linkedin.com/in/dawid-marczak/
              </p>
            </a>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default Contact;
