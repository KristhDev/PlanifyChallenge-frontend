import { FC } from 'react';

/* Components */
import { Button } from '../../../ui';

/* Hooks */
import { useBookings } from '../../hooks';

/* Interfaces */
import { ServiceCardProps } from './interfaces';

/**
 * Generate a Service Card component for the given service.
 *
 * @param {ServiceCardProps} service - The service to display in the card
 * @return {JSX.Element} The rendered Service Card component
 */
export const ServiceCard: FC<ServiceCardProps> = ({ service }): JSX.Element => {
    const { selectedService, setSelectedService } = useBookings();
    const isSelectedService = (service.id === selectedService?.id);

    return (
        <article className="bg-white rounded-lg shadow-md border-[1px] border-neutral-200 p-3">
            <h2 className="text-neutral-800 text-base font-bold mb-2">{ service.name }</h2>
            <p className="text-neutral-500 text-base mb-4">{ service.description }</p>

            <div className="flex flex-row justify-end">
                <Button 
                    aria-disabled={ isSelectedService }
                    className="disabled:bg-violet-800"
                    disabled={ isSelectedService }
                    onClick={ () => setSelectedService(service) }
                    type="button"
                >
                    { isSelectedService ? 'Seleccionado' : 'Seleccionar' }
                </Button>
            </div>
        </article>
    );
}