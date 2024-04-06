/* Components */
import { TimeSlotSelector } from '../TimeSlotSelector';

/* Hooks */
import { useBookings } from '../../hooks';

/**
 * Renders the TimeSlotCol component which displays upcoming available time slots.
 *
 * @return {JSX.Element} The TimeSlotCol component
 */
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