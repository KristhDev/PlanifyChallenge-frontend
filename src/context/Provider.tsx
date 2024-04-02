import { FC, PropsWithChildren } from 'react';

/* Modules */
import { StepsProvider } from '../modules/shared';

/* Utils */
import { serviceSteps } from '../utils';

const Provider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    return (
        <StepsProvider 
            steps={ serviceSteps }
            currentStep={ serviceSteps[0] }
        >
            { children }
        </StepsProvider>
    );
}

export default Provider;