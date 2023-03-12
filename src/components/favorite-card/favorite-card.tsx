import { useContext } from 'react';

import styles from './favorite-card.module.scss';
import classNames from 'classnames';
import { FavoriteContext } from '../../context/FavoriteContext';

export interface FavoriteCardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: String;
        overview: String;
        vote_average: number;
        release_date: String;
    };
}

export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    const { dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.poster_path}
                className={styles.fImg}
            />
            <div className={styles.detail}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div
                className={styles.delete}
                onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: movie })}
            >
                <img src="https://i.imgur.com/oFxZf6r.png" alt="delete logo" />
            </div>
        </div>
    );
};
