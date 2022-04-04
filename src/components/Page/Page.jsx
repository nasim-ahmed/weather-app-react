import React, { Fragment } from 'react';
import styles from './Page.module.css'
import Form from '../Form'
import Card from '../Card'

import useForecast from '../../hooks/useForecast';

const Page = () => {
    const { error, forecast, submitRequest } = useForecast();

    const onSubmit = value => {
         submitRequest(value)
    }

    return (
        <Fragment>
            <div className={`${styles.container} my-5`}>
                <h1 className={`text-center ${styles.title}`}>Weather in</h1>
                <Form submitSearch={onSubmit}/>
                {/* Forecast */}
                {forecast && <Card forecast={forecast}/>}
           </div>
        </Fragment>
     );
}

export default Page;