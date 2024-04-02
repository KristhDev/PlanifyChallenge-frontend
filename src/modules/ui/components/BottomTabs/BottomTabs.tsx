import { IoCalendarNumber, IoCalendar } from 'react-icons/io5';

export const BottomTabs = (): JSX.Element => {
    return (
        <nav className="bg-white">
            <ul className="flex items-center justify-around gap-4">
                <li>
                    <a 
                        href="#"
                        className="bg-neutral-100 py-2 px-4 pb-1 text-indigo-600 border-b-4 border-indigo-600 flex flex-col items-center justify-center gap-1"
                    >
                        <IoCalendarNumber size={ 24 } />
                        <span>Reservar</span>
                    </a>
                </li>

                <li>
                    <a 
                        href="#"
                        className="py-2 px-4 pb-1 text-slate-900 border-b-4 border-slate-900 flex flex-col items-center justify-center gap-1"
                    >
                        <IoCalendar size={ 24 } />
                        <span>Mis turnos</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}