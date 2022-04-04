import styles from './Location.module.css';
import PropTypes from 'prop-types';

const Location = ({location, temperature, humidity, feelsLike, condition, maxTemp, minTemp}) => {
    return (
    <div className={`card-img-top ${styles.img}`}>
       <div className={`${styles.cityname} my-3`}>
         <p>{location}</p>
         <span>...</span>
       </div>
    </div>
    ); 
}

Location.propTypes = {
   location: PropTypes.string.isRequired,
   temperature: PropTypes.string.isRequired,
   humidity: PropTypes.string.isRequired,
   feelsLike: PropTypes.string.isRequired,
   condition: PropTypes.string.isRequired,
   maxTemp: PropTypes.string.isRequired,
   minTemp: PropTypes.string.isRequired,
};


export default Location;