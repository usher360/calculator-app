import './Content.scss';
import CalcButton from "../CalcButton/CalcButton";
import {Col, Container, Row} from "react-bootstrap";

const buttonList = [7,8,9,'*',4,5,6,'/',1,2,3,'+', 0, '=', '-' ];

function Content() {

    return (
        <div className="content">
            <Container className="login-container">
                <Row sm={12} style={{justifyContent: 'center'}}>
                    {buttonList.map(buttonValue => <Col md={3} sm={3} key={buttonValue}><CalcButton value={buttonValue}/></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default Content;
