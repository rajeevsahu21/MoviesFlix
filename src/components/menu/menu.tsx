import { useContext } from 'react';

import styles from './menu.module.scss';
import classNames from 'classnames';
import { SearchContext } from '../../context/SearchContext';

export interface MenuProps {
    className?: string;
}

const sortBy: { q: String; text: String }[] = [
    { q: 'popularity.desc', text: 'Popularity' },
    { q: 'vote_count.desc', text: 'Most Voted' },
    { q: 'release_date.desc', text: 'Release Date' },
];
const genres: { id: String; text: String }[] = [
    { id: '28', text: 'Action' },
    { id: '12', text: 'Adventure' },
    { id: '35', text: 'Comedy' },
    { id: '18', text: 'Drama' },
    { id: '27', text: 'Horror' },
    { id: '10749', text: 'Romance' },
    { id: '53', text: 'Thiller' },
    { id: '16', text: 'Animation' },
];

export const Menu = ({ className }: MenuProps) => {
    const { dispatch } = useContext(SearchContext);
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/zYa4iMN.png" alt="logo" className={styles.logoImg} />
                <span className={styles.logoText}>MovieFilx</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li
                        className={styles.listItem}
                        key={item.q.toLowerCase()}
                        onClick={() => dispatch({ type: 'SORT_BY', payload: item.q })}
                    >
                        {item.text}
                    </li>
                ))}
                <span className={styles.title}>Sort By</span>
                <hr className={styles.hr} />
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li
                        className={styles.listItem}
                        key={item.text.toLowerCase()}
                        onClick={() => dispatch({ type: 'ADD_GENRE', payload: item.id })}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
