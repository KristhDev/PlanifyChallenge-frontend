import { FC } from 'react';
import clsx from 'clsx';

/* Interfaces */
import { SpinnerProps } from './interfaces';

/**
 * Renders a spinner component with the provided className.
 *
 * @param {string} className - Additional classes to apply to the spinner
 * @return {JSX.Element} The spinner component
 */
export const Spinner: FC<SpinnerProps> = ({ className }): JSX.Element => {
    return (
        <span className={ clsx('animate-spin inline-block w-4 h-4 border-[2px] border-violet-600 border-t-transparent rounded-full', className) } />
    );
}