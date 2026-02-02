import React from 'react';
import {Link} from "react-router";
import styles from './UserDropdownItem.module.scss'

const UserDropdownItem = ({name, image, link, alt}) => {
    return (
        <Link
            to={link}
            className={styles.item}
        >
            <img
                src={image}
                alt={alt}
                className={styles.item__image}
            />
            {name}
        </Link>
    );
};

export default UserDropdownItem;