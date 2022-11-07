import './Main.scss';
import {Container, Row} from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Calculator from "./Calculator/Calculator";
import Footer from "../../Components/Footer/Footer";
import {Route, Switch} from "react-router-dom";
import History from "./History/History";

function Main() {

    return (
        <div className="App">
            <Container className="App">
                <Row className="app-header">
                    <Header/>
                </Row>

                <Row className="app-content">
                    <Switch>
                        <Route path="/history">
                            <History/>
                        </Route>
                        <Route exact path="/">
                            <Calculator/>
                        </Route>
                    </Switch>
                </Row>

                <Row className="app-footer">
                    <Footer/>
                </Row>

            </Container>
        </div>
  );
}

export default Main;
