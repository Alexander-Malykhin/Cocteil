import React from 'react';
import styles from './ButtonLoginPrimary.module.scss'

const ButtonLoginPrimary = ({disabled, isLoading, ...props}) => {
    return (
        <button
            type="submit"
            className={`${styles.button} ${disabled ? styles.button__disabled : ""}`}
            disabled={disabled}
            {...props}
        >
            {isLoading ? 'Отправка...' : 'Войти в кабинет'}
        </button>
    );
};

export default ButtonLoginPrimary;
