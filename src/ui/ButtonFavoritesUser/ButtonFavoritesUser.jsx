import React from 'react';
import styles from './ButtonFavoritesUser.module.scss'
import FavoritesImage from '@assets/heart.svg'

const ButtonFavoritesUser = () => {
    return (
        <button className={styles.button}>
            <img
                src={FavoritesImage}
                alt="favorites-image"
                className={styles.button__image}
            />
        </button>
    );
};

export default ButtonFavoritesUser;