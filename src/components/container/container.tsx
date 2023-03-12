import styles from './container.module.scss';
import classNames from 'classnames';
import { Search } from '../search/search';
import { Cards } from '../cards/cards';

export interface ContainerProps {
    className?: string;
}

export const Container = ({ className }: ContainerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Search />
            <Cards />
        </div>
    );
};
