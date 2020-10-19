/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../Styles/App.css";
import {
  Header,
  Divider,
  Grid,
  Image,
  Table,
  Container,
} from "semantic-ui-react";
import Navbar from "./Navbar";

class About extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="fullPage darkback">
          <Navbar />
          <hr />
          <div className="center">
            <Header as="h2" className="header-about" color="red">
              About me
            </Header>
          </div>
          <Grid columns="2" textAlign="center" stackable verticalAlign="top">
            <Grid.Column width="8">
              <Grid.Row>
                <Header as="h2" className="subheader-about">
                  Life
                </Header>
              </Grid.Row>
              <Grid.Row textAlign="center">
                <Image circular src={require("../Photos/dawid.png")} />
              </Grid.Row>{" "}
              <br />
              <Grid.Row textAlign="center">
                <div className="size-15 width65">
                  <p>
                    Currently, I am a fourth-year student at the Wrocław
                    University of Technology. This is my last semester in the
                    field of{" "}
                    <span>
                      {" "}
                      Computer Science with a specialization in Computer Systems
                      and Networks. I am looking for my first job related to
                      front end development.{" "}
                    </span>{" "}
                  </p>{" "}
                  <br />
                  <p>
                    {" "}
                    Since 2015 I am also a fitness, indoor cycling and
                    trampoline instructor. It is my great passion as well as a
                    chance to meet new people and express myself.{" "}
                  </p>
                </div>
              </Grid.Row>
              <Divider hidden className="mb-1"></Divider>
              <Grid.Row columns="2" textAlign="center">
                <Grid.Column className="m-1">
                  <a href="https://github.com/dawidmarczak" target="_blank">
                    <Image
                      className="mb-0"
                      circular
                      src={require("../Icons/github.png")}
                      size="tiny"
                    />
                    <p>GITHUB</p>
                  </a>
                </Grid.Column>

                <Grid.Column className="m-1">
                  <a
                    href="https://www.linkedin.com/in/dawid-marczak/"
                    target="_blank"
                  >
                    <Image
                      className="mb-0"
                      circular
                      src={require("../Icons/linkedin.png")}
                      size="tiny"
                    />
                    <p>LINKEDIN</p>
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>

            <Divider vertical hidden></Divider>

            <Grid.Column textAlign="center" width="8">
              <Grid.Row>
                <Header as="h2" className="subheader-about">
                  Education
                </Header>
              </Grid.Row>

              <Grid.Row className="width70">
                <Table unstackable celled  inverted basic="very">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>
                        NAME OF THE UNIVERSITY
                      </Table.HeaderCell>
                      <Table.HeaderCell>FIELD</Table.HeaderCell>
                      <Table.HeaderCell>PERIOD</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        Wroclaw University of Science and Technology{" "}
                      </Table.Cell>
                      <Table.Cell>Computer Science</Table.Cell>
                      <Table.Cell>2017 - now</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>
                        Secondary school no. 1 in Bełchatów
                      </Table.Cell>
                      <Table.Cell>Math-physic</Table.Cell>
                      <Table.Cell>2014 - 2017</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Row>

              <Divider className="mb-2"></Divider>

              <Grid.Row>
                <Header as="h2" className="subheader-about">
                  Experience
                </Header>
              </Grid.Row>

              <Grid.Row className="width70">
                <Table unstackable celled inverted basic="very" className='overFlow'>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>NAME OF THE COMPANY</Table.HeaderCell>
                      <Table.HeaderCell>POSITION</Table.HeaderCell>
                      <Table.HeaderCell>DESCRIPTION</Table.HeaderCell>
                      <Table.HeaderCell>PERIOD</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>PGS Software Wrocław</Table.Cell>
                      <Table.Cell>Front-end Developer</Table.Cell>
                      <Table.Cell>
                        Preparation of an online store application. Work related
                        to the course at the university - performed in a group.{" "}
                      </Table.Cell>
                      <Table.Cell>03.2020-06.2020</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Fitness Academy Wrocław</Table.Cell>
                      <Table.Cell>
                        Fitness Instructor & Customer Service
                      </Table.Cell>
                      <Table.Cell>
                        Conducting fitness classes, work in the customer service
                        department, marketing activities.Replacing the manager
                        in his absence.
                      </Table.Cell>
                      <Table.Cell>09.2017-now</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Green Power Station Bełchatów</Table.Cell>
                      <Table.Cell>
                        Fitness Instructor & Customer Service
                      </Table.Cell>
                      <Table.Cell>
                        Organization of marathons / events, management of the
                        club profile, preparation of advertising materials,
                        conducting fitness classes.
                      </Table.Cell>
                      <Table.Cell>06.2016- 07.2017</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>Fitness Club Olimpia Bełchatów</Table.Cell>
                      <Table.Cell>Fitness Instructor</Table.Cell>
                      <Table.Cell>
                        Organization of fitness shows, conducting fitness and
                        cycling classes. Managing the club fanpage on Facebook.
                      </Table.Cell>
                      <Table.Cell>01.2015- 06.2016</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Row>
            </Grid.Column>
          </Grid>{" "}
        </Container>
        <br /> <br />
      </>
    );
  }
}

export default About;
