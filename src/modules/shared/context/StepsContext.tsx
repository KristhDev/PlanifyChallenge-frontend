import { createContext } from 'react';

import { StepsContextProps } from '../interfaces';

const StepsContext = createContext<StepsContextProps>({} as StepsContextProps);

export default StepsContext;