import React from 'react';
import styles from './ButtonsList.module.scss'
import ButtonHeaderUser from "@ui/ButtonHeaderUser/ButtonHeaderUser.jsx";
import ButtonFavoritesUser from "@ui/ButtonFavoritesUser/ButtonFavoritesUser.jsx";
import ButtonBasketUser from "@ui/ButtonBasketUser/ButtonBasketUser.jsx";

const ButtonsList = ({isActive,setActive, triggerRef}) => {
    return (
        <div className={styles.list}>
            <ButtonHeaderUser isActive={isActive} setActive={setActive} triggerRef={triggerRef}/>
            <ButtonFavoritesUser/>
            <ButtonBasketUser/>
        </div>
    );
};

export default ButtonsList;