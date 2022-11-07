import './Main.scss';
import {Container, Row} from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Content from "../../Components/Content/Content";
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
                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/history">
                            <History/>
                        </Route>
                        <Route exact path="/">
                            <Content/>
                        </Route>
                    </Switch>
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

export default Main;
