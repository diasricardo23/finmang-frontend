import React, {} from 'react';
// import { AppProps } from "next/app";
import styles from '../../styles/Home.module.css'


const Container = (props: any) => {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}

export default Container;