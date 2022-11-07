import './History.scss';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";

function History() {
    const buttonHistory = useSelector((state) => state.buttonHistory.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'history/clear' });
    };

    return (
        <div className="history">
            <div className="history-list">
                {buttonHistory.map((buttonValue, index) => <div key={buttonValue.id}>{`${index+1}) `} {buttonValue.value}</div>)}
            </div>

            <div className="history-clear-button">
                <Button variant="light" onClick={handleClick}>Clear History</Button>
            </div>
        </div>
    );
}

export default History;
