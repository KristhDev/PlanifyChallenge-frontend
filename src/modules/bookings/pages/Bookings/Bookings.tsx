import { useNavigate } from 'react-router-dom';

import { Button, ProgressBar, Spinner } from '../../../ui';
import { CategoryAcordion } from '../../components';

import { useBookings } from '../../hooks';
import { useSteps } from '../../../shared';

const Bookings = (): JSX.Element => {
    const navigate = useNavigate();

    const { categories, isCategoriesLoading, selectedService } = useBookings();
    const { setCurrentStep } = useSteps();
    const hasSelectedService = !!selectedService;

    const handleNext = (): void => {
        navigate('/bookings/time-slots');
        setCurrentStep(2);
    }

    return (
        <div className="flex justify-center min-h-[calc(100svh_-_120px)] md:min-h-[calc(100vh_-_184px)]">
            <div className="flex flex-col lg:w-7/12 xl:w-6/12 2xl:w-5/12 min-h-[inherit]">
                <ProgressBar />

                { (isCategoriesLoading) ? (
                    <div 
                        className="flex items-center justify-center mt-32"
                        data-testid="bookings-loading-spinner"
                    >
                        <Spinner className="w-32 h-32 border-4" />
                    </div>
                ) : (
                    <div className="bg-white border-[1px] border-neutral-200 p-2 grid grid-cols-1 rounded-2xl shadow-md">
                        <h1 className="text-neutral-800 text-xl font-bold p-2">Categorias</h1>

                        { categories.map((category, index) => (
                            <CategoryAcordion 
                                category={ category }
                                key={ `${ category.name }-${ index }` } 
                            />  
                        )) }
                    </div>
                ) }

                { (hasSelectedService) && (
                    <div className="flex flex-1 justify-end items-end pt-10">
                        <Button 
                            className="text-lg"
                            onClick={ handleNext }
                        >
                            Siguiente
                        </Button>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Bookings;