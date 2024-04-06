import { Navigate, useNavigate } from 'react-router-dom';

/* Components */
import { Button, ProgressBar } from '../../../ui';
import { TimeSlotCol } from '../../components';

/* Hooks */
import { useSteps } from '../../../shared';
import { useBookings } from '../../hooks';

/**
 * Generates the TimeSlots component for booking appointments.
 *
 * @return {JSX.Element} The TimeSlots component
 */
export const TimeSlots = (): JSX.Element => {
    const navigate = useNavigate();

    const { selectedService, selectedTimeSlot } = useBookings();
    const { setCurrentStep } = useSteps();

    const hasSelectedService = !!selectedService;
    const hasSelectedTimeSlot = !!selectedTimeSlot;

    /**
     * A function that handles going to the previous step and updating the current step.
     *
     * @return {void} 
     */
    const handlePrev = (): void => {
        navigate('/bookings');
        setCurrentStep(1);
    }

    /**
     * A function that handles the next step in the process.
     *
     * @return {void} No return value
     */
    const handleNext = (): void => {
        navigate('/bookings/summary');
        setCurrentStep(3);
    }

    if (!hasSelectedService) {
        setCurrentStep(1);
        return (<Navigate to="/bookings" />);
    }

    return (
        <div className="flex justify-center min-h-[calc(100svh_-_120px)] md:min-h-[calc(100vh_-_184px)]">
            <div className="flex flex-col w-full lg:w-7/12 xl:w-6/12 2xl:w-5/12 min-h-[inherit]">
                <ProgressBar />

                <TimeSlotCol />

                <div className="flex flex-1 flex-row justify-between items-end pt-10 md:justify-evenly">
                    <Button 
                        className="text-lg"
                        onClick={ handlePrev }
                    >
                        Anterior
                    </Button>

                    <Button 
                        aria-disabled={ !hasSelectedTimeSlot }
                        className="text-lg disabled:bg-violet-500"
                        onClick={ handleNext }
                        disabled={ !hasSelectedTimeSlot }
                    >
                        Siguiente
                    </Button>
                </div>
            </div>
        </div>
    );
}