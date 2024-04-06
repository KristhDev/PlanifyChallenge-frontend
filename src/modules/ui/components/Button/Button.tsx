import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * Renders a button component with specified children and class name.
 *
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} children - The children to be rendered inside the button.
 * @param {string} className - Additional classes to be applied to the button.
 * @param {ButtonHTMLAttributes<HTMLButtonElement>} rest - Additional attributes to be spread on the button element.
 * @return {JSX.Element} The rendered button component.
 */
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