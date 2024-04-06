import { waitFor } from '@testing-library/react';

/* Setups */
import { renderUseSteps } from '../../../../setups';

/* Mocks */
import { currentStepMock, stepsMock } from '../../../../mocks';

describe('Test in useSteps hook', () => {
    it('should return default values', () => {
        const { result } = renderUseSteps();

        expect(result.current).toEqual({
            currentStep: currentStepMock,
            steps: stepsMock,
            setCurrentStep: expect.any(Function)
        });
    });

    it('should set current step based on provided number - setCurrentStep', async () => {
        const { result } = renderUseSteps();

        await waitFor(() => {
            result.current.setCurrentStep(2);
        });

        expect(result.current.currentStep).toEqual(stepsMock[1]);
    });
});