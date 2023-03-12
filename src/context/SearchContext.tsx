import React, { createContext, useReducer } from 'react';

interface SearchAction {
    type: String;
    payload: String;
}

interface State {
    sortBy: String;
    genre: String;
    query: String;
}
const INITIAL_STATE: State = {
    sortBy: 'popularity.desc',
    genre: '',
    query: '',
};

const SearchReducer = (state: State, action: SearchAction) => {
    switch (action.type) {
        case 'SORT_BY':
            return { ...state, sortBy: action.payload, query: '' };
        case 'ADD_GENRE':
            return { ...state, genre: action.payload, query: '' };
        case 'ADD_QUERY':
            return { ...state, query: action.payload };
        default:
            return state;
    }
};

interface ProviderProps {
    children: React.ReactNode;
}

export const SearchContext = createContext<{
    state: State;
    dispatch: React.Dispatch<SearchAction>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

export const SearchContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
    return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>;
};
