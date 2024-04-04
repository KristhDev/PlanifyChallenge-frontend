import { useContext } from 'react';

/* Contexts */
import { StepsContext, StepsContextProps } from '../context';

/**
 * Returns the Steps context props.
 *
 * @return {StepsContextProps} Steps context props
 */
const useSteps = (): StepsContextProps => {
    return useContext(StepsContext);
}

export default useSteps;