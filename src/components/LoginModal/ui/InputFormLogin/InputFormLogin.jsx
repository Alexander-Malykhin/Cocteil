import React, {forwardRef} from 'react';
import styles from './InputFormLogin.module.scss'

const InputFormLogin = forwardRef(
    ({placeholder, type, ...rest}, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={styles.input}
                placeholder={placeholder}
                {...rest}
            />
        );
    }
);

export default InputFormLogin;