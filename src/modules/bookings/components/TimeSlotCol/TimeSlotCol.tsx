import { TimeSlotSelector } from '../TimeSlotSelector';

import { useBookings } from '../../hooks';

export const TimeSlotCol = (): JSX.Element => {
    const { timeSlotsOfSelectedService } = useBookings();

    return (
        <div className="bg-white border-[1px] border-neutral-200 p-4 rounded-2xl shadow-md">
            <h1 className="text-neutral-800 text-xl font-bold pb-4">Próximos turnos disponibles</h1>

            { timeSlotsOfSelectedService.map((timeSlot, index) => (
                <TimeSlotSelector 
                    timeSlot={ timeSlot } 
                    key={ `${ timeSlot.date }-${ index }` } 
                />
            )) }
        </div>
    );
}