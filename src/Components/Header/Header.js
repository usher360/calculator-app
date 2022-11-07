import './Header.scss';
import {Button, Tab, Tabs} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";

function Header() {
    const currentUser = useSelector((state) => state.currentUser.value);
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({ type: 'user/remove' });
        history.push(`/login`);
    }

    const handleTabClick = (key) => {
        history.push(key);
    }

    return (
        <div id="header">
            <Tabs
                id="controlled-tab-example"
                activeKey={location.pathname}
                onSelect={handleTabClick}
                className="mb-3"
            >
                <Tab eventKey="/" title="Calculator" onClick={handleTabClick}>
                    <div/>
                </Tab>
                <Tab eventKey="/history" title="History" onClick={handleTabClick}>
                    <div/>
                </Tab>
            </Tabs>

            <Button variant="secondary" onClick={handleLogout}>
                Logout
            </Button>
            Hello {currentUser.userName}
        </div>
    );
}

export default Header;
