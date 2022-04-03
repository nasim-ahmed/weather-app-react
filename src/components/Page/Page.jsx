
import React, { Fragment } from 'react';
import styles from './Page.module.css'
import Form from '../Form'
import Card from '../Card'

const Page = () => {
    return (
        <Fragment>
            <div className={`${styles.container} my-5`}>
            <h1 className={`text-center ${styles.title}`}>Weather in</h1>
            <Form/>
            <Card/>
           </div>
        </Fragment>
     );
}

export default Page;