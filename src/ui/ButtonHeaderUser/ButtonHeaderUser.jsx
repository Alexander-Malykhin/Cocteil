import React from 'react';
import styles from './ButtonHeaderUser.module.scss'
import AvatarImage from '@assets/avatar.svg'

const ButtonHeaderUser = ({isActive,setActive}) => {
    return (
        <button className={styles.button} onClick={() => setActive(!isActive)}>
            <img
                src={AvatarImage}
                alt="avatar-image"
                className={styles.button__image}
            />
        </button>
    );
};

export default ButtonHeaderUser;