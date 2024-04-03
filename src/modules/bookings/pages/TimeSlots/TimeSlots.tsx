import { useNavigate } from 'react-router-dom';

import { Button, ProgressBar } from '../../../ui';

import { useSteps } from '../../../shared';

const TimeSlots = (): JSX.Element => {
    const navigate = useNavigate();

    const { setCurrentStep } = useSteps();

    const handlePrev = (): void => {
        navigate('/bookings');
        setCurrentStep(1);
    }

    const handleNext = (): void => {
        navigate('/bookings/summary');
        setCurrentStep(3);
    }

    return (
        <div className="flex justify-center min-h-[calc(100svh_-_120px)]">
            <div className="flex flex-col lg:w-7/12 xl:w-6/12 2xl:w-5/12 min-h-[inherit]">
                <ProgressBar />

                <div className="flex flex-1 flex-row justify-between pt-10">
                    <Button 
                        className="text-lg"
                        onClick={ handlePrev }
                    >
                        Anterior
                    </Button>

                    <Button 
                        className="text-lg"
                        onClick={ handleNext }
                    >
                        Siguiente
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default TimeSlots;