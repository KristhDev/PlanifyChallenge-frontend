import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export const Button = ({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
    return (
        <button
            { ...rest }
            className={ clsx('bg-violet-600 text-white text-base py-2 px-4 rounded-xl hover:bg-violet-700 active:bg-violet-700 transition-colors duration-300', className) }
        >
            { children }
        </button>
    );
}