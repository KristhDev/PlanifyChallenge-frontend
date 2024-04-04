import { renderHook } from '@testing-library/react'

import { StepsContextProps, StepsProvider, useSteps } from '../../src/modules/shared';

import { currentStepMock, stepsMock } from '../mocks';

export const renderUseSteps = () => {
    return renderHook<StepsContextProps, StepsContextProps>(() => useSteps(), { 
        wrapper: ({ children }) => (
            <StepsProvider
                currentStep={ currentStepMock }
                steps={ stepsMock }
            >
                { children }
            </StepsProvider>
        ) 
    });
}