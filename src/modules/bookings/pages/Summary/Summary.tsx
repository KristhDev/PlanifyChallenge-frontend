import { Navigate, useNavigate } from 'react-router-dom';

import { Button, ProgressBar } from '../../../ui';

import { useBookings } from '../../hooks';
import { useSteps } from '../../../shared';

import { date } from '../../../../utils';

const Summary = (): JSX.Element => {
    const navigate = useNavigate();
    const { selectedService, selectedTimeSlot } = useBookings();
    const { setCurrentStep } = useSteps();

    const hasSelectedService = !!selectedService;
    const hasSelectedTimeSlot = !!selectedTimeSlot;

    const handlePrev = (): void => {
        navigate('/bookings/time-slots');
        setCurrentStep(2);
    }

    const handleConfirm = (): void => {
        alert('Gracias por su reserva! :D');
        window.location.reload();
    }

    if (!hasSelectedService || !hasSelectedTimeSlot) {
        setCurrentStep(1);
        return (<Navigate to="/bookings" />);
    }

    return (
        <div className="flex justify-center min-h-[calc(100svh_-_120px)]">
            <div className="flex flex-col w-full lg:w-7/12 xl:w-6/12 2xl:w-5/12 min-h-[inherit]">
                <ProgressBar />

                <div className="bg-white border-[1px] border-neutral-200 p-4 rounded-2xl shadow-md">
                    <h2 className="text-lg text-neutral-800 mb-2 font-bold">Servicio: { selectedService.name }</h2>
                    <p className="text-neutral-800">Fecha: { date.format(selectedTimeSlot.date, 'DD/MM/YYYY') } { selectedTimeSlot.hour }</p>
                </div>

                <div className="flex flex-1 flex-row justify-between items-end pt-10">
                    <Button 
                        className="text-lg"
                        onClick={ handlePrev }
                    >
                        Anterior
                    </Button>

                    <Button 
                        className="text-lg"
                        onClick={ handleConfirm }
                    >
                        Confirmar
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Summary;