/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../Styles/App.css";
import { Header, Divider, Grid, Image, Progress } from "semantic-ui-react";
import Carousel from "react-elastic-carousel";

class ProjectsList extends React.Component {
  render() {
    return (
      <>
        <Grid.Row>
          <Header as="h2" className="header-about" color="red">
            Projects
          </Header>
        </Grid.Row>

        <Grid.Row textAlign="center" className="m-1">
          <Carousel itemsToShow={1}>
            <div key="1">
              <Header as="h2">FitDesk</Header>
              <Image
                centered
                size="big"
                src={require("../Photos/fitnessApp.png")}
              />

              <p className="mt-1 mb-1">
                A web application designed to support the management of a
                fitness club. The project is created as an engineering thesis.
                It includes customer service, admin panel, classes and
                intructors tab. The addition of customer panel is also planned.
              </p>

              <Divider horizontal className="red">
                Technologies
              </Divider>

              <Grid verticalAlign="middle" textAlign="center">
                <Grid.Row columns="3">
                  <Grid.Column width="9">
                    <Header as="h4">
                      REACT - NODE.JS - MONGO DB - SEMANTIC UI{" "}
                    </Header>
                  </Grid.Column>

                  <Grid.Column width="4">
                    <Progress
                      className="mb-0"
                      value="3.5"
                      total="5"
                      size="medium"
                      progress="ratio"
                      success
                      inverted
                    />
                    <p>Difficulty</p>
                  </Grid.Column>

                  <Grid.Column width="3">
                    <a href="https://github.com/dawidmarczak/" target="_blank">
                      <Image
                        className="mb-0"
                        centered
                        circular
                        src={require("../Icons/github.png")}
                        size="mini"
                      />
                    </a>

                    <p>Soon on github!</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider horizontal className="red">
                Authors
              </Divider>

              <Header as="h5">Dawid Marczak </Header>
            </div>

            <div key="2">
              <Header as="h2">Football Club Web Application</Header>
              <Image
                centered
                size="big"
                src={require("../Photos/clubPage.png")}
              />

              <p className="mt-1 mb-1">
                Web application for the football club. System has the
                functionality of selling tickets, conducting live broadcasts and
                a calendar of events. In addition, it has static information
                subpages and an extensive administrator panel.
              </p>

              <Divider horizontal>Technologies</Divider>

              <Grid verticalAlign="middle" textAlign="center">
                <Grid.Row columns="2">
                  <Grid.Column width="9">
                    <Header as="h3" color="red">
                      HTML - CSS - Bootstrap - PHP{" "}
                    </Header>
                  </Grid.Column>

                  <Grid.Column width="3">
                    <Progress
                      className="mb-0"
                      value="3.5"
                      total="5"
                      size="medium"
                      progress="ratio"
                      success
                      inverted
                    />
                    <p>Difficulty</p>
                  </Grid.Column>

                  <Grid.Column width="3">
                    <a
                      href="https://github.com/dawidmarczak/SportClubWebsite"
                      target="_blank"
                    >
                      <Image
                        className="mb-0"
                        centered
                        circular
                        src={require("../Icons/github.png")}
                        size="mini"
                      />
                    </a>

                    <p>Find on github!</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider horizontal>Authors</Divider>

              <Header as="h5">
                Dawid Marczak, Maciej Grzela, Piotr Tocicki, Milena Korusiewicz{" "}
              </Header>
            </div>

            <div key="3">
              <Header as="h2">Porfolio Website</Header>
              <Image
                centered
                size="big"
                src={require("../Photos/portfolioPage.png")}
              />

              <p className="mt-1 mb-1">
                Website prepared to present my person and my experience. It
                presents my experience in professional work and briefly shows
                what characterizes me.{" "}
              </p>

              <Divider horizontal>Technologies</Divider>

              <Grid verticalAlign="middle" textAlign="center">
                <Grid.Row columns="2">
                  <Grid.Column width="9">
                    <Header as="h3" color="red">
                      REACT - CSS - SEMANTIC UI{" "}
                    </Header>
                  </Grid.Column>

                  <Grid.Column width="3">
                    <Progress
                      className="mb-0"
                      value="1"
                      total="5"
                      size="medium"
                      progress="ratio"
                      success
                      inverted
                    />
                    <p>Difficulty</p>
                  </Grid.Column>

                  <Grid.Column width="3">
                    <a
                      href="https://github.com/dawidmarczak/PortfolioWebsite"
                      target="_blank"
                    >
                      <Image
                        className="mb-0"
                        centered
                        circular
                        src={require("../Icons/github.png")}
                        size="mini"
                      />
                    </a>

                    <p>Find on github!</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider horizontal>Authors</Divider>

              <Header as="h5">Dawid Marczak</Header>
            </div>

            <div key="4">
              <Header as="h2">Car Wash Simulator</Header>
              <Image
                centered
                size="big"
                src={require("../Photos/carWashApp.png")}
              />

              <p className="mt-1 mb-1">
                Car wash simulator written in C++ using the ncruses
                visualization library. Work based on working with threads and
                mutexes. Project realized during the Systemy Operacyjne 2
                classes.
              </p>

              <Divider horizontal>Technologies</Divider>

              <Grid verticalAlign="middle" textAlign="center">
                <Grid.Row columns="2">
                  <Grid.Column width="9">
                    <Header as="h3" color="red">
                      C++ - NCURSES - THREADS
                    </Header>
                  </Grid.Column>

                  <Grid.Column width="3">
                    <Progress
                      className="mb-0"
                      value="3"
                      total="5"
                      size="medium"
                      progress="ratio"
                      success
                      inverted
                    />
                    <p>Difficulty</p>
                  </Grid.Column>

                  <Grid.Column width="3">
                    <a
                      href="https://github.com/dawidmarczak/CarWashSImulator"
                      target="_blank"
                    >
                      <Image
                        className="mb-0"
                        centered
                        circular
                        src={require("../Icons/github.png")}
                        size="mini"
                      />
                    </a>

                    <p>Find on github!</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider horizontal>Authors</Divider>

              <Header as="h5">Dawid Marczak</Header>
            </div>
          </Carousel>
        </Grid.Row>
      </>
    );
  }
}

export default ProjectsList;
