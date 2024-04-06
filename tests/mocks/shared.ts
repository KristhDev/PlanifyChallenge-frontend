/* Interfaces */
import { Step } from '../../src/modules/shared';

export const stepsMock: Step[] = [
    { number: 1, title: 'Step 1' },
    { number: 2, title: 'Step 2' },
    { number: 3, title: 'Step 3' }
];

export const currentStepMock: Step = stepsMock[0];
export const setCurrentStepMock = vi.fn();