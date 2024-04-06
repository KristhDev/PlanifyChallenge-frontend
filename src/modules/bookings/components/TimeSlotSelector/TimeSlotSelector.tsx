import { FC } from 'react';

/* Components */
import { Button } from '../../../ui';

/* Hooks */
import { useBookings } from '../../hooks';

/* Interfaces */
import { TimeSlotSelectorProps } from './interfaces';

/* Utils */
import { date } from '../../../../utils';

/**
 * Renders a time slot selector component.
 *
 * @param {TimeSlotSelectorProps} timeSlot - the time slot data to display
 * @return {JSX.Element} the time slot selector component
 */
export const TimeSlotSelector: FC<TimeSlotSelectorProps> = ({ timeSlot }): JSX.Element => {
    const { setSelectedTimeSlot, selectedService, selectedTimeSlot } = useBookings();

    /**
     * Handles the selection of a time slot.
     *
     * @param {string} timeSlot - the selected time slot
     * @param {string} date - the selected date
     * @return {void} 
     */
    const handleSelectTimeSlot = (timeSlot: string, date: string): void => {
        setSelectedTimeSlot({ date, hour: timeSlot, serviceId: selectedService?.id! });
    }

    return (
        <div className="mb-4 last:mb-0">
            <h2 className="text-lg text-neutral-800 font-bold mb-4">{ date.format(timeSlot.date, 'DD [de] MMMM') }</h2>

            <div className="grid grid-cols-2 gap-4">
                { timeSlot.availableTimeslots?.map((time, index) => (
                    <Button 
                        aria-disabled={ ((time === selectedTimeSlot?.hour) && (timeSlot.date === selectedTimeSlot?.date)) }
                        className="disabled:bg-violet-800"
                        disabled={ ((time === selectedTimeSlot?.hour) && (timeSlot.date === selectedTimeSlot?.date)) }
                        key={ `${ time }-${ index }` }
                        onClick={ () => handleSelectTimeSlot(time, timeSlot.date) }
                        type="button"
                    >
                        { time }
                    </Button>
                )) }
            </div>
        </div>
    );
}