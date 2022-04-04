import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({submitSearch}) => {
    const [location, setLocation] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        if (!location || location === '') return;
        submitSearch(location)
    }

    function handleChange(event){ 
        setLocation(event.target.value)
    }

    return ( 
        <form onSubmit={onSubmit}>
            <input
            type="text"
            name="city"
            required
            placeholder="Please type city" 
            value = {location}
            className={`form-control ${styles.input} my-3`}
            onChange= {handleChange}
            />

            <button type="button" className={`btn btn-success ${styles.search_button} my-2`} onClick={onSubmit}>
                    Search
            </button>
        </form>   
     );
}

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired
}

export default Form;