import React from 'react';
import styles from './ButtonBasketUser.module.scss'
import BasketImage from '@assets/bag.svg'

const ButtonBasketUser = () => {
    return (
        <button className={styles.button}>
            <img
                src={BasketImage}
                alt="basket-image"
                className={styles.button__image}
            />
        </button>
    );
};

export default ButtonBasketUser;