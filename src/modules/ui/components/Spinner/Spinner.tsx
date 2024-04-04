import { FC } from 'react';
import clsx from 'clsx';

/* Interfaces */
import { SpinnerProps } from './interfaces';

export const Spinner: FC<SpinnerProps> = ({ className }): JSX.Element => {
    return (
        <span className={ clsx('animate-spin inline-block w-4 h-4 border-[2px] border-violet-600 border-t-transparent rounded-full', className) } />
    );
}