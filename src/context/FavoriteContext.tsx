import React, { createContext, useReducer } from 'react';

interface Movie {
    id: number;
    poster_path?: string;
    title: String;
    overview: String;
    vote_average: number;
    release_date: String;
}

interface FavoriteAction {
    type: String;
    payload: Movie;
}

interface State {
    favorites: Movie[];
}
const INITIAL_STATE: State = {
    favorites: [],
};

const FavoriteReducer = (state: State, action: FavoriteAction) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return { favorites: [...state.favorites, action.payload] };
        case 'REMOVE_MOVIE':
            return {
                favorites: [...state.favorites.filter((item) => item.id !== action.payload.id)],
            };
        default:
            return state;
    }
};

interface ProviderProps {
    children: React.ReactNode;
}

export const FavoriteContext = createContext<{
    state: State;
    dispatch: React.Dispatch<FavoriteAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

export const FavoriteContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(FavoriteReducer, INITIAL_STATE);
    return (
        <FavoriteContext.Provider value={{ state, dispatch }}>{children}</FavoriteContext.Provider>
    );
};
