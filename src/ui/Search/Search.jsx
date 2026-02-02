import React from 'react';
import styles from './Search.module.scss'
import SearchImage from '@assets/search.svg'


const Search = () => {
    return (
        <div className={styles.search}>
            <img
                src={SearchImage}
                alt="search-image"
                className={styles.search__image}
            />
            <input
                type="text"
                className={styles.search__input}
                placeholder={'Поиск'}
            />
        </div>
    );
};

export default Search;