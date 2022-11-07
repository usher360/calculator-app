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
        <div className="header">
            <div className="header-section">
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
            </div>

            <div className="header-section">
                <Button variant="light" onClick={handleLogout}>
                    Logout
                </Button>
                <div>Hello {currentUser.userName}</div>
            </div>
        </div>
    );
}

export default Header;
