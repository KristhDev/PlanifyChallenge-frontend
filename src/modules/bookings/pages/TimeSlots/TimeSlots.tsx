import { Navigate, useNavigate } from 'react-router-dom';

import { Button, ProgressBar } from '../../../ui';
import { TimeSlotCol } from '../../components';

import { useSteps } from '../../../shared';
import { useBookings } from '../../hooks';

const TimeSlots = (): JSX.Element => {
    const navigate = useNavigate();

    const { selectedService, selectedTimeSlot } = useBookings();
    const { setCurrentStep } = useSteps();

    const hasSelectedService = !!selectedService;
    const hasSelectedTimeSlot = !!selectedTimeSlot;

    const handlePrev = (): void => {
        navigate('/bookings');
        setCurrentStep(1);
    }

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

export default TimeSlots;