import React, { Component, Fragment } from 'react';
import styles from './Page.module.css'
import Form from '../Form'

const Page = () => {
    return (
        <body>
            <div class={`container my-5`}>
            <h1 className={`text-center ${styles.title}`}>Weather in</h1>
            <Form/>
           </div>
        </body>
       
     );
}

export default Page;