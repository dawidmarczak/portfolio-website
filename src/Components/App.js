import React from "react";
import "../Styles/App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Main from "./Main";

function App() {
  return (
    <Container fluid className='position fullPage'>
      <Main />
    </Container>
  );
}

export default App;
