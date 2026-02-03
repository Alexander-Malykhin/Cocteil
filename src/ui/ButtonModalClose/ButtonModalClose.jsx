import React from 'react';
import styles from './ButtonModalClose.module.scss'
import closeImage from "@assets/close.svg";
import {useDispatch} from "react-redux";
import {closeLoginModal} from "@/store/modalSlice.js";

const ButtonModalClose = () => {

    const dispatch = useDispatch();

    return (
        <button className={styles.button} onClick={() => dispatch(closeLoginModal())}>
            <img
                src={closeImage}
                alt="close-image"
                className={styles.button__image}
            />
        </button>
    );
};

export default ButtonModalClose;