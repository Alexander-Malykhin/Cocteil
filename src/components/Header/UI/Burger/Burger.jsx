import React from 'react';
import styles from './Burger.module.scss'

const Burger = () => {
    return (
        <div className={styles.burger}>
            <span className={styles.burger__row}></span>
            <span className={styles.burger__row}></span>
            <span className={styles.burger__row}></span>
        </div>
    );
};

export default Burger;