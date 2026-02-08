import React from 'react';
import {useForm} from "react-hook-form";
import styles from './LoginModal.module.scss'
import ButtonLoginPrimary from "@components/LoginModal/ui/ButtonLoginPrimary/ButtonLoginPrimary.jsx";
import ButtonLoginSecondary from "@components/LoginModal/ui/ButtonLoginSecondary/ButtonLoginSecondary.jsx";
import InputFormLogin from "@components/LoginModal/ui/InputFormLogin/InputFormLogin.jsx";
import ButtonModalClose from "@ui/ButtonModalClose/ButtonModalClose.jsx";
import { useLoginMutation } from '@/api/authApi'


const LoginModal = ({isLogin, setIsLogin}) => {

    const [login, { isLoading, error }] = useLoginMutation()

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: "onChange"});

    const onLogin = async (data) => {
        try {
            const response = await login(data).unwrap()
            console.log('SUCCESS:', response)
        } catch (err) {
            console.log('ERROR:', err)
        }
    }

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
                        placeholder="Электронная почта"
                        type="text"
                        {...register("email", {
                            required: "Email обязателен",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Введите корректный email"
                            }
                        })}
                    />

                    <span
                        className={`${styles.modal__error} ${
                            errors.email ? styles.modal__errorActive : ""
                        }`}
                    >
                            {errors.email?.message}
                    </span>

                    <InputFormLogin
                        placeholder="Пароль"
                        type="password"
                        {...register("password", {
                            required: "Пароль обязателен",
                            minLength: {
                                value: 6,
                                message: "Минимум 6 символов"
                            }
                        })}
                    />

                    <span
                        className={`${styles.modal__error} ${
                            errors.password ? styles.modal__errorActive : ""
                        }`}
                    >
                        {errors.password?.message}
                    </span>
                </form>

                <button className={styles.modal__password}>
                    Не помню пароль
                </button>

                <div className={styles.modal__footer}>
                    <ButtonLoginPrimary onClick={handleSubmit(onLogin)} disabled={!isValid} isLoading={isLoading}/>
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