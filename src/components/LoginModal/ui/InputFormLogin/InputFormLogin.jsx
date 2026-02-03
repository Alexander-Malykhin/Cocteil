import React from 'react';
import styles from './InputFormLogin.module.scss'

const InputFormLogin = ({placeholder, type}) => {
    return (
        <input
            type={type}
            className={styles.input}
            placeholder={placeholder}
        />
    );
};

export default InputFormLogin;