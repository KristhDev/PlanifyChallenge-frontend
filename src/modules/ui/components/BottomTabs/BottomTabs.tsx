import { NavLink } from 'react-router-dom';
import { IoCalendarNumber, IoCalendar } from 'react-icons/io5';
import clsx from 'clsx';

const links = [
    {
        label: 'Reservar',
        icon: <IoCalendarNumber size={ 24 } />,
        to: '/bookings'
    },
    {
        label: 'Mis turnos',
        icon: <IoCalendar size={ 24 } />,
        to: '/my-shifts'
    },
];

/**
 * Renders the bottom navigation tabs.
 *
 * @return {JSX.Element} The JSX element representing the bottom navigation tabs.
 */
export const BottomTabs = (): JSX.Element => {
    return (
        <nav className="bg-white w-full fixed border-t-[1px] border-neutral-200 shadow-[0_0_12px_0_rgba(0,0,0,0.05)] bottom-0 left-0 md:hidden">
            <ul className="flex items-center justify-around gap-4">
                { links.map((link, index) => (
                    <li key={ `${ link.label }-${ index }` }>
                        <NavLink
                            className={ ({ isActive }) => clsx(
                                'py-2 px-4 pb-1 border-b-4 flex flex-col items-center justify-center gap-1',
                                { 
                                    'bg-neutral-200 text-violet-600 border-violet-600': isActive,
                                    'text-neutral-800 border-neutral-800': !isActive 
                                }
                            ) }
                            to={ link.to }
                        >
                            { link.icon }
                            <span>{ link.label }</span>
                        </NavLink>
                    </li>
                )) }
            </ul>
        </nav>
    );
}