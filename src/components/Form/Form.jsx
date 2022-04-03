import { useState } from 'react';
import styles from './Form.module.css'

const Form = () => {
    const [location, setLocation] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        if (!location || location === '') return;
        alert(location)
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
            autocomplete="off"
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

export default Form;