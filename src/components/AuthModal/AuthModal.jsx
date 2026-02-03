import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import styles from './AuthModal.module.scss'
import {useSelector} from "react-redux";
import LoginModal from "@components/LoginModal/LoginModal.jsx";
import RegistrationModal from "@components/RegistrationModal/RegistrationModal.jsx";

const AuthModal = () => {

    const modalVariants = {
        hidden: {
            y: -30,
            scale: 0.95,
            opacity: 0,
        },
        visible: {
            y: 0,
            scale: 1,
            opacity: 1,
        },
        exit: {
            y: -30,
            scale: 0.95,
            opacity: 0,
        },
    };

    const isLoginOpen = useSelector(state => state.modal.isLoginOpen)
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        isLoginOpen ?
            document.body.style.overflow = 'hidden'
            :
            document.body.style.overflow = ''

        return () => document.body.style.overflow = ''

    }, [isLoginOpen]);

    return (
        <motion.div
            variants={modalVariants}
            transition={{duration: 0.35, ease: "easeOut"}}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${styles.modal} ${isLoginOpen ? styles.modal__active : styles.modal__close}`}
        >
            {isLogin ?
                <LoginModal isLogin={isLogin} setIsLogin={setIsLogin}/>
                :
                <RegistrationModal isLogin={isLogin} setIsLogin={setIsLogin}/>
            }
        </motion.div>
    );
};

export default AuthModal;