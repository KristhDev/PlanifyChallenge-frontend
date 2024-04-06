import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Setups */
import { rrdNavigateMock, rrdUseNavigateMock } from '../../../../setups';

/* Mocks */
import { selectedServiceMock, selectedTimeSlotMock, setCurrentStepMock, timeSlotsOfSelectedServiceMock } from '../../../../mocks';

/* Modules */
import { TimeSlots, useBookings } from '../../../../../src/modules/bookings';
import { useSteps } from '../../../../../src/modules/shared';

/* Utils */
import { serviceSteps } from '../../../../../src/utils';

const renderPage = () => render(<TimeSlots />);

vi.mock('../../../../../src/modules/bookings/hooks/useBookings.ts');
vi.mock('../../../../../src/modules/shared/hooks/useSteps.ts');

describe('Test in <TimeSlots /> page', () => {
    (useBookings as Mock).mockReturnValue({
        selectedService: selectedServiceMock,
        selectedTimeSlot: null,
        timeSlotsOfSelectedService: timeSlotsOfSelectedServiceMock
    });

    (useSteps as Mock).mockReturnValue({
        setCurrentStep: setCurrentStepMock,
        currentStep: serviceSteps[1], 
        steps: serviceSteps
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match snapshot', () => {
        const { container } = renderPage();
        expect(container).toMatchSnapshot();
    });

    it('should call setCurrentStep and navigate when prev button is clicked', async () => {
        renderPage();

        const button = screen.getByText<HTMLButtonElement>('Anterior');
        await userEvent.click(button);

        expect(setCurrentStepMock).toHaveBeenCalledTimes(1);
        expect(setCurrentStepMock).toHaveBeenCalledWith(1);

        expect(rrdUseNavigateMock).toHaveBeenCalledTimes(1);
        expect(rrdUseNavigateMock).toHaveBeenCalledWith('/bookings');
    });

    it('should disable next button when has not selectedTimeSlot', async () => {
        renderPage();

        const button = screen.getByText<HTMLButtonElement>('Siguiente');

        expect(button.disabled).toBeTruthy();
        expect(button.className).toContain('disabled:bg-violet-500');
    });

    it('should call setCurrentStep and navigate when next button is clicked and has selectedTimeSlot', async () => {
        (useBookings as Mock).mockReturnValue({
            selectedService: selectedServiceMock,
            selectedTimeSlot: selectedTimeSlotMock,
            timeSlotsOfSelectedService: timeSlotsOfSelectedServiceMock
        });

        renderPage();

        const button = screen.getByText<HTMLButtonElement>('Siguiente');
        await userEvent.click(button);

        expect(setCurrentStepMock).toHaveBeenCalledTimes(1);
        expect(setCurrentStepMock).toHaveBeenCalledWith(3);

        expect(rrdUseNavigateMock).toHaveBeenCalledTimes(1);
        expect(rrdUseNavigateMock).toHaveBeenCalledWith('/bookings/summary');
    });

    it('should call Navigate component when selectedService is null', () => {
        (useBookings as Mock).mockReturnValue({
            selectedService: null,
            selectedTimeSlot: null,
            timeSlotsOfSelectedService: []
        });

        renderPage();

        expect(setCurrentStepMock).toHaveBeenCalledTimes(1);
        expect(setCurrentStepMock).toHaveBeenCalledWith(1);

        expect(rrdNavigateMock).toHaveBeenCalledTimes(1);
        expect(rrdNavigateMock).toHaveBeenCalledWith({ to: '/bookings' });
    });
});