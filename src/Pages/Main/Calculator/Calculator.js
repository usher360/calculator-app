import './Calculator.scss';
import CalcButton from "../../../Components/CalcButton/CalcButton";
import {Badge, Col, Container, Row} from "react-bootstrap";
import {evaluate} from "mathjs";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import calc from "../../../State/reducers/calcReducer";

const buttonList = [7,8,9,'*',4,5,6,'/',1,2,3,'+', 0, '=', '-'];

function Calculator() {
    const initialFormula = useSelector((state) => state.calc.value);
    const [expression, setExpression] = useState("");
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setExpression(initialFormula);
    }, []);

    useEffect(() => {
        dispatch({ type: 'calc/formula', payload: expression });
    }, [expression]);

    const handleClick = (value) => {
        if(value !== '=') {
            setExpression((ex) => `${ex}${value}`);
            isError && setIsError(false);
            return;
        }
        let result;
        try {
            result = evaluate(expression);
        }
        catch (err){
            console.log('bad formula' + err);
            setIsError(true);
            result = '';
        }
        finally {
            if (result === undefined) {
                result = '';
            }
            setExpression(result);
        }
    };

    return (
        <div className="calculator">
            <div>{expression}</div>
            <div className="calc-board">
                <hr/>
                { buttonList.map(buttonValue =>
                    <CalcButton key={buttonValue} value={buttonValue} onClick={() => handleClick(buttonValue)}/>) }
            </div>

            {isError && <Badge bg="danger">Bad Formula</Badge>}
        </div>
    );
}

export default Calculator;
