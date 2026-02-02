import React from 'react';
import styles from './UserDropdownList.module.scss'
import {guestArray} from "@components/UserDropdown/ui/UserDropdownList/guestArray.js";
import {userArray} from "@components/UserDropdown/ui/UserDropdownList/userArray.js";
import UserDropdownItem from "@components/UserDropdown/ui/UserDropdownItem/UserDropdownItem.jsx";

const UserDropdownList = ({isGuest}) => {

    const getListByMode = isGuest ? guestArray : userArray

    return (
        <div className={styles.menu}>
            {getListByMode.map(item =>
                <UserDropdownItem
                    key={item.id}
                    alt={item.alt}
                    name={item.name}
                    link={item.link}
                    image={item.image}
                />
            )}
        </div>
    );
};

export default UserDropdownList;