import styles from './Card.module.css';
import Location from '../Location';
import WeatherInfo from '../WeatherInfo';
import PropTypes from 'prop-types';


const Card = ({forecast}) => {
    return (
        <div className={`card ${styles.card}`}>
            <Location {...forecast.currentDay}/>
            <WeatherInfo {...forecast.currentDay}/>
        </div>
    );
}

Card.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object
    })
}

export default Card;