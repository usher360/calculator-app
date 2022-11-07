import './Login.scss';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";

function Login() {
    const [userDetails, setUserDetails] = useState({userName: "", email: ""});
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'user/set', payload: userDetails });
        history.push(`/`);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container className="login-container">
            <Row sm={12} style={{justifyContent: 'center'}}>
                <Col sm={12} md={8}>
                    <Card className="login-card">
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="userName">User Name: </label>
                                    <input id="userName" name="userName" type="text" placeholder="Enter username" required
                                           value={userDetails.userName} onChange={handleChange}/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="userEmail">Email: </label>
                                    <input id="userEmail" name="email" type="email" placeholder="Enter email" required
                                           value={userDetails.email} onChange={handleChange}/>
                                </div>

                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
