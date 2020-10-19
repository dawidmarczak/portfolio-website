import React from "react";
import "../Styles/App.css";
import { Header, Divider, Grid, List, Table } from "semantic-ui-react";

class Skills extends React.Component {
  render() {
    return (
      <>
        <Grid.Row>
          <Header as="h2" className="header-about" color="red">
            Skills
          </Header>
        </Grid.Row>

        <Grid.Row>
          <Header as="h2" className="subheader-about">
            Programming work
          </Header>
        </Grid.Row>

        <Grid.Row className="width70">
          <Table celled inverted basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>LANGUAGE</Table.HeaderCell>
                <Table.HeaderCell>SOLUTIONS USED</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>JavaScript/HTML/CSS (Front-end) </Table.Cell>
                <Table.Cell>
                  React, React Router, Semantic UI, Bootstrap, Axios
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>JavaScript (Back-end)</Table.Cell>
                <Table.Cell>Node.js, Express</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Row>
              <Table.Cell>Databases</Table.Cell>
              <Table.Cell>MySQL, MongoDB, Mongoose</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>C++</Table.Cell>
              <Table.Cell>Qt Creator, Threads/Mutex </Table.Cell>
            </Table.Row>
          </Table>
        </Grid.Row>

        <Divider className="mb-2"></Divider>

        <Grid.Row>
          <Header as="h2" className="subheader-about">
            Other skills
          </Header>
        </Grid.Row>

        <Grid.Row className="width70" divided>
          <List bulleted size="huge" verticalAlign="middle">
            <List.Item>Junior water lifeguard course</List.Item>

            <List.Item>Cisco CCNA Routing and Switching course</List.Item>

            <List.Item>
              Experience in working with team in a large company
            </List.Item>

            <List.Item>
              Training in sales, customer service and marketing
            </List.Item>

            <List.Item>Good time organization and commitment to work</List.Item>

            <List.Item>Creative thinking</List.Item>
          </List>
        </Grid.Row>
      </>
    );
  }
}

export default Skills;
