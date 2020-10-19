import React from "react";
import "../Styles/App.css";
import { Grid, Divider } from "semantic-ui-react";
import ProjectsList from "./ProjectsList";
import Skills from "./Skills";
import Navbar from "./Navbar";
class Projects extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <hr />
        <Grid
          columns="2"
          textAlign="center"
          stackable
          verticalAlign="top"
          className="mb-2"
        >
          <Grid.Column width="8">
            <ProjectsList />
          </Grid.Column>

          <Divider vertical hidden></Divider>

          <Grid.Column textAlign="center" width="8">
            <Skills />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default Projects;
