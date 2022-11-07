import './Calculator.scss';
import CalcButton from "../../../Components/CalcButton/CalcButton";
import {Col, Container, Row} from "react-bootstrap";
import {evaluate} from "mathjs";
import {useEffect, useState} from "react";

const buttonList = [7,8,9,'*',4,5,6,'/',1,2,3,'+', 0, '=', '-'];

function Calculator() {
    const [expression, setExpression] = useState("");

    const handleClick = (value) => {
        if(value === '=') {
            setExpression((ex) => evaluate(ex));
            return;
        }
        setExpression((ex) => `${ex}${value}`);
    };

    return (
        <div className="content">
            <Container className="login-container">
                <Row sm={12} style={{justifyContent: 'center'}}>
                    <div>{expression}</div>
                    {buttonList.map(buttonValue =>
                        <Col md={3} sm={3} key={buttonValue}>
                            <CalcButton value={buttonValue} onClick={() => handleClick(buttonValue)}/>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Calculator;
