import React, {useState} from 'react';
import styles from './UserDropdown.module.scss'
import UserDropdownList from "@components/UserDropdown/ui/UserDropdownList/UserDropdownList.jsx";
import UserDropdownHeader from "@components/UserDropdown/ui/UserDropdownHeader/UserDropdownHeader.jsx";

const UserDropdown = ({isOpen, dropdown}) => {

    const [isGuest] = useState(true);

    return (
        <div
            className={`${styles.panel} ${isOpen ? styles.open : styles.closed}`}
            ref={dropdown}
        >
            <UserDropdownHeader isGuest={isGuest}/>
            <UserDropdownList isGuest={isGuest}/>
        </div>
    );
};

export default UserDropdown;