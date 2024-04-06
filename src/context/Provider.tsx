import { FC, PropsWithChildren } from 'react';

/* Modules */
import { BookingsProvider } from '../modules/bookings';
import { StepsProvider } from '../modules/shared';

/* Utils */
import { serviceSteps } from '../utils';

/**
 * Renders the Provider component with StepsProvider and BookingsProvider.
 *
 * @param {PropsWithChildren} children - The child components to be rendered within the Provider.
 * @return {JSX.Element} The rendered Provider component.
 */
const Provider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <StepsProvider 
            steps={ serviceSteps }
            currentStep={ serviceSteps[0] }
        >
            <BookingsProvider>
                { children }
            </BookingsProvider>
        </StepsProvider>
    );
}

export default Provider;