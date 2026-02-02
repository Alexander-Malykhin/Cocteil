import React from 'react';
import {Link} from "react-router";
import styles from './UserDropdown.module.scss'
import BasketImage from '@assets/bag.svg'
import FavoritesImage from '@assets/heart.svg'

const UserDropdown = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.panel__header}>
                <div className={styles.panel__avatar}></div>

                <button className={styles.panel__button}>
                    Войти
                </button>
            </div>
            <div className={styles.panel__menu}>
                <Link
                    to={'/'}
                    className={styles.panel__link}
                >
                    <img
                        src={BasketImage}
                        alt="basket-image"
                        className={styles.panel__link_image}
                    />
                    Корзина
                </Link>
                <Link
                    to={'/'}
                    className={styles.panel__link}
                >
                    <img
                        src={FavoritesImage}
                        alt="favorites-image"
                        className={styles.panel__link_image}
                    />
                    Избранное
                </Link>
            </div>
        </div>
    );
};

export default UserDropdown;