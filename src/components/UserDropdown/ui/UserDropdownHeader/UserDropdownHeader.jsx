import React from 'react';
import styles from './UserDropdownHeader.module.scss';
import ButtonHeaderLogin from "@ui/ButtonHeaderLogin/ButtonHeaderLogin.jsx";

const UserDropdownHeader = ({isGuest}) => {
    return isGuest ? (
        <div className={styles.header}>
            <div className={styles.header__avatar}></div>

           <ButtonHeaderLogin/>
        </div>
    ) : (
        <div className={styles.header}>
            <div className={styles.header__column}>
                <div className={styles.header__avatar}></div>
                <span className={styles.header__name}>Alex</span>
            </div>
        </div>
    );
};

export default UserDropdownHeader;