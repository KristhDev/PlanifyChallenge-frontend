import { renderHook } from '@testing-library/react'

/* Modules */
import { StepsContextProps, StepsProvider, useSteps } from '../../src/modules/shared';

/* Mocks */
import { currentStepMock, stepsMock } from '../mocks';

/**
 * Renders the useSteps hook within a test environment.
 *
 * @return {RenderHookResult<StepsContextProps, StepsContextProps>} The result of rendering the useSteps hook within a test environment.
 */
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