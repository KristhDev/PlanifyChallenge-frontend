import { useContext } from 'react';

/* Contexts */
import { StepsContext } from '../context';

/* Interfaces */
import { StepsContextProps } from '../interfaces';

/**
 * Returns the Steps context props.
 *
 * @return {StepsContextProps} Steps context props
 */
const useSteps = (): StepsContextProps => {
    return useContext(StepsContext);
}

export default useSteps;