import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { rrdUseNavigateMock } from '../../../../setups';

import { categoriesMock, selectedServiceMock, setCurrentStepMock, setSelectedServiceMock } from '../../../../mocks';

import { Bookings, useBookings } from '../../../../../src/modules/bookings';
import { useSteps } from '../../../../../src/modules/shared';

import { serviceSteps } from '../../../../../src/utils';

const renderPage = () => render(<Bookings />);

vi.mock('../../../../../src/modules/bookings/hooks/useBookings.ts');
vi.mock('../../../../../src/modules/shared/hooks/useSteps.ts');

describe('Test in <Bookings /> page', () => {
    (useBookings as Mock).mockReturnValue({
        selectedService: null,
        setSelectedService: setSelectedServiceMock,
        isCategoriesLoading: false,
        categories: categoriesMock
    });

    (useSteps as Mock).mockReturnValue({
        setCurrentStep: setCurrentStepMock,
        currentStep: serviceSteps[0], 
        steps: serviceSteps
    });

    it('should to match snapshot', () => {
        const { container } = renderPage();
        expect(container).toMatchSnapshot();
    });

    it('should render next button when selected service isnt null', () => {
        (useBookings as Mock).mockReturnValue({
            selectedService: selectedServiceMock,
            setSelectedService: setSelectedServiceMock,
            isCategoriesLoading: false,
            categories: categoriesMock
        });

        renderPage();

        const nextButton = screen.queryByText<HTMLButtonElement>('Siguiente');
        expect(nextButton).toBeTruthy();
    });

    it('should call navigate and setCurrentStep when next button is clicked', async () => {
        renderPage();

        const nextButton = screen.getByText<HTMLButtonElement>('Siguiente');
        await userEvent.click(nextButton);

        expect(setCurrentStepMock).toHaveBeenCalledTimes(1);
        expect(setCurrentStepMock).toHaveBeenCalledWith(2);

        expect(rrdUseNavigateMock).toHaveBeenCalledTimes(1);
        expect(rrdUseNavigateMock).toHaveBeenCalledWith('/bookings/time-slots');
    });

    it('should render spinner when isCategoriesLoading is true', () => {
        (useBookings as Mock).mockReturnValue({
            selectedService: null,
            setSelectedService: setSelectedServiceMock,
            isCategoriesLoading: true,
            categories: []
        });

        renderPage();

        const spinner = screen.queryByTestId('bookings-loading-spinner');
        expect(spinner).toBeTruthy();
    });
});