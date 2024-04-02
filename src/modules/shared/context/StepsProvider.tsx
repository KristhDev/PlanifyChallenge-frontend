import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

/* Contexts */
import { StepsContext } from './';

/* Interfaces */
import { Step, StepsState } from '../interfaces';

export interface StepsProviderProps extends StepsState {}

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