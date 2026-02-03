import React from 'react';
import styles from './ButtonHeaderLogin.module.scss'
import {useDispatch} from "react-redux";
import {openLoginModal} from "@/store/modalSlice.js";

const ButtonHeaderLogin = () => {

    const dispatch  = useDispatch()

    return (
        <button
            className={styles.button}
            onClick={() => dispatch(openLoginModal())}
        >
            Войти
        </button>
    );
};

export default ButtonHeaderLogin;