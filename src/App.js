import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";
import { Container, Title } from "./Style.css";
import { Control } from "./component/Control";
import { Content } from "./component/Content";
import { TEST_ID } from "./config/testId";

function App() {
  const [list, setList] = useState([]);
  return (
    <Container>
      <Title data-testid={TEST_ID.APP_TITLE}>Todo List Sample</Title>
      <Control list={list} setList={setList} />
      <Content list={list} setList={setList} />
    </Container>
  );
}

export default App;
