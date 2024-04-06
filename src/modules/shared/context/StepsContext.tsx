import { createContext } from 'react';

/* Interfaces */
import { StepsContextProps } from '../interfaces';

const StepsContext = createContext<StepsContextProps>({} as StepsContextProps);

export default StepsContext;