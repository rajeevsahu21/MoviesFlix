import { useContext } from 'react';

import styles from './card.module.scss';
import classNames from 'classnames';
import { FavoriteContext } from '../../context/FavoriteContext';

export interface CardProps {
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

export const Card = ({ className, movie }: CardProps) => {
    const { dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className={styles.cardImg}
                alt={movie.poster_path}
            />
            <div className={styles.detail}>
                <h1>{movie.title.substring(0, 26)}</h1>
                <span className={styles.rating}>{movie.vote_average.toFixed(1)}</span>
                <p className={styles.desc}>{movie.overview.substring(0, 220)}</p>
                <button
                    className={styles.button}
                    onClick={() => dispatch({ type: 'ADD_MOVIE', payload: movie })}
                >
                    +
                </button>
            </div>
        </div>
    );
};
