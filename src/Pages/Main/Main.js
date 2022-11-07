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
            <div className="App">
                <div className="app-header">
                    <Header/>
                </div>

                <div className="app-content">
                    <Switch>
                        <Route path="/history">
                            <History/>
                        </Route>
                        <Route exact path="/">
                            <Calculator/>
                        </Route>
                    </Switch>
                </div>

                <div className="app-footer">
                    <Footer/>
                </div>

            </div>
        </div>
  );
}

export default Main;
