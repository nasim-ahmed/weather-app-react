import React, { Component } from 'react';
import styles from './Form.module.css'

const Form = () => {

    
    return ( 
        <form>
            <div className="form-group mx-sm-3 mb-2">
                <input
                type="text"
                name="city"
                placeholder="Please type city"
                autocomplete="off"
                className={`${styles.input} form-text text-muted`}
                />
            </div>
            
            <button
            type="button"
            className="btn btn-success">
                Search
            </button>

        </form>   
     );
}

export default Form;