import styles from './WeatherInfo.module.css';
import cloud from '../Card/img/cloud.svg'; 
import PropTypes from 'prop-types';

const WeatherInfo = ({location, temperature}) => {
    return (
    <div className="card-body">
        <div className={`${styles.cardmid} row`}>
            <div className={`col-8 text-center ${styles.temp}`}>
                <span>{temperature}&deg;C</span>
            </div>
            <div className="col-4 condition-temp">
                <p className={`${styles.condition}`}>Thunder Storm</p>
                <p className={`${styles.high}`}>30&deg;C</p>
                <p className={`${styles.low}`}>27&deg;C</p>
            </div>
            <div className={`${styles.icon_container} card shadow mx-auto`}>
                <img src={cloud} alt="" />
            </div>
            <div className={`${styles.card_bottom} px-1 py-4 row`}>
                <div className="col text-center">
                    <p>30&deg;C</p>
                    <span>Feels Like</span>
                </div>
                <div className="col text-center">
                    <p>55%</p>
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
 };

export default WeatherInfo;