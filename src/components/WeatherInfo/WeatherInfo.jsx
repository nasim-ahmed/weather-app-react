import styles from './WeatherInfo.module.css';
import cloud from '../Card/img/cloud.svg'; 
import PropTypes from 'prop-types';

const WeatherInfo = ({location, temperature, humidity, feelsLike, condition, maxTemp, minTemp}) => {
    return (
    <div className="card-body">
        <div className={`${styles.cardmid} row`}>
            <div className={`col-8 text-center ${styles.temp}`}>
                <span>{temperature}&deg;C</span>
            </div>
            <div className="col-4 condition-temp">
                <p className={`${styles.condition}`}>{condition}</p>
                <p className={`${styles.high}`}>{maxTemp}&deg;C</p>
                <p className={`${styles.low}`}>{minTemp}&deg;C</p>
            </div>
            <div className={`${styles.icon_container} card shadow mx-auto`}>
                <img src={cloud} alt="" />
            </div>
            <div className={`${styles.card_bottom} px-1 py-4 row`}>
                <div className="col text-center">
                    <p>{feelsLike}&deg;C</p>
                    <span>Feels Like</span>
                </div>
                <div className="col text-center">
                    <p>{humidity}%</p>
                    <span>Humidity</span>
                </div>
            </div>
        </div>
    </div>
    );
}

WeatherInfo.propTypes = {
    location: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    feelsLike: PropTypes.string.isRequired, 
    condition: PropTypes.string.isRequired,
    maxTemp: PropTypes.string.isRequired,
    minTemp: PropTypes.string.isRequired,
 };

export default WeatherInfo;