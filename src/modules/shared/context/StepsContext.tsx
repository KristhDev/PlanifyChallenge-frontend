import { createContext } from 'react';

import { StepsState } from '../interfaces';

export interface StepsContextProps extends StepsState {
    setCurrentStep: (step: number) => void;
}

const StepsContext = createContext<StepsContextProps>({} as StepsContextProps);

export default StepsContext;