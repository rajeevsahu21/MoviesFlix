import { useContext } from 'react';

import styles from './favorite.module.scss';
import classNames from 'classnames';
import { FavoriteContext } from '../../context/FavoriteContext';
import { FavoriteCard } from '../favorite-card/favorite-card';

export interface FavoriteProps {
    className?: string;
}

export const Favorite = ({ className }: FavoriteProps) => {
    const { state } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Favorites</h1>
            {state.favorites.length > 0 &&
                state.favorites.map((movie) => <FavoriteCard movie={movie} key={movie.id} />)}
        </div>
    );
};
