import { NavLink } from 'react-router-dom';
import { IoCalendarNumber, IoCalendar } from 'react-icons/io5';
import clsx from 'clsx';

const links = [
    {
        label: 'Reservar',
        icon: <IoCalendarNumber size={ 24 } />,
        to: '/'
    },
    {
        label: 'Mis turnos',
        icon: <IoCalendar size={ 24 } />,
        to: '/my-appointments'
    },
];

export const BottomTabs = (): JSX.Element => {
    return (
        <nav className="bg-white">
            <ul className="flex items-center justify-around gap-4">
                { links.map((link, index) => (
                    <li key={ `${ link.label }-${ index }` }>
                        <NavLink
                            className={ ({ isActive }) => clsx(
                                'py-2 px-4 pb-1 border-b-4 flex flex-col items-center justify-center gap-1',
                                { 'bg-neutral-100 text-indigo-600 border-indigo-600': isActive },
                                { 'text-slate-800 border-slate-800': !isActive }
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