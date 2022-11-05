import './App.scss';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

function App() {

  return (
    <div className="App">
      <Container className="App">
        <div className="app-header">
            <Header></Header>
        </div>

        <Row className="app-content">
            <Content></Content>
        </Row>

        <Row className="app-footer">
            <Footer>
              Footer
            </Footer>
        </Row>

      </Container>
    </div>
  );
}

export default App;
