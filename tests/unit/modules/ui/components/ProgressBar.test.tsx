import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';

/* Mocks */
import { currentStepMock, stepsMock } from '../../../../mocks';

/* Modules */
import { ProgressBar } from '../../../../../src/modules/ui';
import { useSteps } from '../../../../../src/modules/shared';

const renderComponent = () => render(<ProgressBar />);

vi.mock('../../../../../src/modules/shared/hooks/useSteps.ts');

describe('Test in <ProgressBar /> component', () => {
    (useSteps as Mock).mockReturnValue({
        currentStep: currentStepMock,
        steps: stepsMock
    });

    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render title of current step', () => {
        renderComponent();

        const title = screen.queryByText(currentStepMock.title);
        expect(title).toBeTruthy();
    });

    it('should render width of bar respect to current step', () => {
        renderComponent();

        const progress = screen.getByTestId<HTMLDivElement>('progress-bar-progress');
        expect(progress?.style.width).toBe(`${ (currentStepMock.number / stepsMock.length) * 100 }%`);
    });
});