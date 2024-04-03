import { FC, PropsWithChildren } from 'react';

/* Modules */
import { BookingsProvider } from '../modules/bookings';
import { StepsProvider } from '../modules/shared';

/* Utils */
import { serviceSteps } from '../utils';

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