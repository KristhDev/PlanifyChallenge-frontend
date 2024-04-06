import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

/* Contexts */
import { StepsContext } from './';

/* Interfaces */
import { Step, StepsProviderProps } from '../interfaces';

/**
 * Provider for the management of steps.
 *
 * @param {Step} currentStep - The current step.
 * @param {Step[]} steps - The list of steps.
 * @return {JSX.Element} - The StepsProvider component.
 */
const StepsProvider: FC<PropsWithChildren<StepsProviderProps>> = ({ children, currentStep, steps }): JSX.Element => {
    const [ currentStepState, setCurrentStepState ] = useState<Step>(currentStep);
    const [ stepsState ] = useState<Step[]>(steps);

    /**
     * Set the current step based on the provided numberStep.
     *
     * @param {number} numberStep - The step number to set as current.
     * @return {void} 
     */
    const setCurrentStep = useCallback((numberStep: number): void => {
        const step = stepsState.find(step => step.number === numberStep);
        if (!step) return;

        setCurrentStepState(step);
    }, [ stepsState ]);

    const state = useMemo(() => ({
        currentStep: currentStepState,
        steps: stepsState,
        setCurrentStep
    }), [
        stepsState,
        currentStepState,
        setCurrentStep
    ]);

    return (
        <StepsContext.Provider value={ state }>
            { children }
        </StepsContext.Provider>
    );
}

export default StepsProvider;