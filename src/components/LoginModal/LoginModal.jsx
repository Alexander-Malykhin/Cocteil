import React from 'react';
import styles from './LoginModal.module.scss'
import ButtonLoginPrimary from "@components/LoginModal/ui/ButtonLoginPrimary/ButtonLoginPrimary.jsx";
import ButtonLoginSecondary from "@components/LoginModal/ui/ButtonLoginSecondary/ButtonLoginSecondary.jsx";
import InputFormLogin from "@components/LoginModal/ui/InputFormLogin/InputFormLogin.jsx";
import ButtonModalClose from "@ui/ButtonModalClose/ButtonModalClose.jsx";

const LoginModal = ({isLogin, setIsLogin}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <div className={styles.modal__header}>
                    <ButtonModalClose/>
                    <h1 className={styles.modal__title}>
                        Вход в личный кабинет
                    </h1>
                </div>

                <form className={styles.modal__form}>
                    <InputFormLogin
                        placeholder={'Электронная почта'}
                        type={'text'}
                    />
                    <InputFormLogin
                        placeholder={'Пароль'}
                        type={'text'}
                    />
                </form>

                <button className={styles.modal__password}>
                    Не помню пароль
                </button>

                <div className={styles.modal__footer}>
                    <ButtonLoginPrimary/>
                    <ButtonLoginSecondary
                        isLogin={isLogin}
                        setIsLogin={setIsLogin}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginModal;