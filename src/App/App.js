import './App.scss';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Login} from "../Pages";
import {useSelector} from "react-redux";
import Main from "../Pages/Main/Main";

function App() {
    const currentUser = useSelector((state) => state.currentUser.value);

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    {!currentUser ? <Redirect to="/login" /> : <Main />}
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
