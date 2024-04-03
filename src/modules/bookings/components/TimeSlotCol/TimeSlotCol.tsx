import { TimeSlotSelector } from '../TimeSlotSelector';

import { useBookings } from '../../hooks';

export const TimeSlotCol = (): JSX.Element => {
    const { timeSlotsOfSelectedService } = useBookings();

    return (
        <div className="bg-white border-[1px] border-gray-300 p-6 rounded-2xl shadow-md">
            { timeSlotsOfSelectedService.map((timeSlot, index) => (
                <TimeSlotSelector 
                    timeSlot={ timeSlot } 
                    key={ `${ timeSlot.date }-${ index }` } 
                />
            )) }
        </div>
    );
}