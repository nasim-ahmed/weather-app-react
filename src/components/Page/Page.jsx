
import React, { Fragment } from 'react';
import styles from './Page.module.css'
import Form from '../Form'
import Card from '../Card'

const Page = () => {
    const onSubmit = value => {
         alert(value)
    }

    return (
        <Fragment>
            <div className={`${styles.container} my-5`}>
            <h1 className={`text-center ${styles.title}`}>Weather in</h1>
            <Form submitSearch={onSubmit}/>
            <Card/>
           </div>
        </Fragment>
     );
}

export default Page;