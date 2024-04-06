import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import planifyLogo from '../../../../assets/iso-planify.png';

const links = [
    {
        label: 'Reservar',
        to: '/bookings'
    },
    {
        label: 'Mis turnos',
        to: '/my-shifts'
    },
];

/**
 * Generates the Navbar component for the application.
 *
 * @return {JSX.Element} The Navbar component
 */
export const Navbar = (): JSX.Element => {
    return (
        <nav className="hidden bg-white w-full border-b-[1px] border-neutral-200 shadow-lg md:flex px-32">
            <ul className="flex flex-1">
                <li className="flex items-center justify-center">
                    <NavLink
                        className="text-2xl text-violet-600 gap-4 h-10 w-10 flex items-center justify-center"
                        rel="noopener noreferrer"
                        target="_blank" 
                        to="https://www.planify.la"
                    >
                        <img 
                            alt="Logo de Planify"
                            src={ planifyLogo }
                        />

                        <span>planify</span>
                    </NavLink>
                </li>
            </ul>

            <ul className="flex flex-1 items-center justify-start gap-4">
                { links.map((link, index) => (
                    <li key={ `${ link.label }-${ index }` }>
                        <NavLink
                            className={ ({ isActive }) => clsx(
                                'p-4 text-lg flex flex-col items-center justify-center gap-1 hover:text-violet-600 duration-300',
                                { 
                                    'text-violet-600': isActive,
                                    'text-neutral-800': !isActive 
                                }
                            ) }
                            to={ link.to }
                        >
                            { link.label }
                        </NavLink>
                    </li>
                )) }
            </ul>
        </nav>
    );
}