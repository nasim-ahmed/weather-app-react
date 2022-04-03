import styles from './Card.module.css';
import Location from '../Location';
import WeatherInfo from '../WeatherInfo';


const Card = () => {
    return (
        <div className={`card ${styles.card}`}>
            <Location/>
            <WeatherInfo/>
        </div>
    );
}

export default Card;