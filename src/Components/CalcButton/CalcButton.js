import './CalcButton.scss';
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

const CalcButton = ({ value, type, onClick }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        onClick?.(e, value, type);
        dispatch({ type: 'history/add', payload: value });
    }

    return (
        <button className="calc-button" onClick={handleClick}>
            {value}
        </button>
    );
};

CalcButton.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.oneOf(['number', 'action']),
    onClick: PropTypes.func,
}

CalcButton.defaultProps = {

};

export default CalcButton;
