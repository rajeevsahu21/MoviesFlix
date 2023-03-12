import { useState, useEffect, useContext } from 'react';

import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { SearchContext } from '../../context/SearchContext';

export interface CardsProps {
    className?: string;
}

export interface Movie {
    id: number;
    poster_path?: string;
    title: String;
    overview: String;
    vote_average: number;
    release_date: String;
}

export const Cards = ({ className }: CardsProps) => {
    const { state } = useContext(SearchContext);
    const [movies, setMovies] = useState<Movie[]>([]);
    const { sortBy, genre, query } = state;
    useEffect(() => {
        fetch(
            query !== ''
                ? `https://api.themoviedb.org/3/search/movie?api_key=26159dc541afbbf4a52c89f59ad4239e&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=26159dc541afbbf4a52c89f59ad4239e&sort_by=${sortBy}&with_genres=${genre}`
        )
            .then((res) => res.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, [sortBy, genre, query]);
    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
