import React, {useState} from 'react';
import styles from './Header.module.scss';
import MainLayout from "@components/MainLayout/MainLayout.jsx";
import Burger from "@components/Header/UI/Burger/Burger.jsx";
import Panel from "@components/Header/UI/Panel/Panel.jsx";
import ButtonsList from "@components/Header/UI/ButtonsList/ButtonsList.jsx";
import Search from "@ui/Search/Search.jsx";
import UserDropdown from "@components/Header/UI/UserDropdown/UserDropdown.jsx";

const Header = () => {

    const [isActive, setIsActive] = useState(true);

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
                        />
                    </Panel>
                </div>
                {isActive && <UserDropdown/>}
            </MainLayout>
        </header>
    );
};

export default Header;