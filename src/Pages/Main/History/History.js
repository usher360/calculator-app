import './History.scss';
import {useSelector} from "react-redux";
import {Col} from "react-bootstrap";
import CalcButton from "../../../Components/CalcButton/CalcButton";

function History() {
    const buttonHistory = useSelector((state) => state.buttonHistory.value);

    return (
        <div id="history">
            <div>
                {buttonHistory.map((buttonValue, index) => <div key={buttonValue.id}>{`${index+1}) `} {buttonValue.value}</div>)}
            </div>
        </div>
    );
}

export default History;
