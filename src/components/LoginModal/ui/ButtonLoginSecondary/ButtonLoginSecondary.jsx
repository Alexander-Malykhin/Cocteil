import React from 'react';
import styles from './ButtonLoginSecondary.module.scss'

const ButtonLoginSecondary = ({isLogin, setIsLogin}) => {

    return (
        <button className={styles.button} onClick={() => setIsLogin(!isLogin)}>
            Регистрация
        </button>
    );
};

export default ButtonLoginSecondary;