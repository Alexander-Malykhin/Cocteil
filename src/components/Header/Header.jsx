import React, { useRef, useState } from 'react'
import { useClickOutside } from '@hooks/useClickOutside'
import styles from './Header.module.scss';
import MainLayout from "@components/MainLayout/MainLayout.jsx";
import Burger from "@components/Header/UI/Burger/Burger.jsx";
import Panel from "@components/Header/UI/Panel/Panel.jsx";
import ButtonsList from "@components/Header/UI/ButtonsList/ButtonsList.jsx";
import UserDropdown from "@components/UserDropdown/UserDropdown.jsx";
import Search from "@ui/Search/Search.jsx";

const Header = () => {

    const [isActive, setIsActive] = useState(true);
    const dropdownRef = useRef(null)
    const triggerRef = useRef(null)

    useClickOutside([dropdownRef, triggerRef], () => setIsActive(false))

    return (
        <header className={styles.header}>
            <MainLayout>
                <div className={styles.header__content}>
                    <Burger/>
                    <Panel>
                        <Search/>
                        <ButtonsList
                            isActive={isActive}
                            setActive={setIsActive}
                            triggerRef={triggerRef}
                        />
                    </Panel>
                </div>
                <UserDropdown isOpen={isActive} dropdown={dropdownRef}/>
            </MainLayout>
        </header>
    );
};

export default Header;