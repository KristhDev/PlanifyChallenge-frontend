import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Setups */
import { alertMock, locationReloadMock, rrdNavigateMock, rrdUseNavigateMock } from '../../../../setups';

/* Mocks */
import { selectedServiceMock, selectedTimeSlotMock, setCurrentStepMock } from '../../../../mocks';

/* Modules */
import { Summary, useBookings } from '../../../../../src/modules/bookings';
import { useSteps } from '../../../../../src/modules/shared';

/* Utils */
import { date, serviceSteps } from '../../../../../src/utils';

const renderPage = () => render(<Summary />);

vi.mock('../../../../../src/modules/bookings/hooks/useBookings.ts');
vi.mock('../../../../../src/modules/shared/hooks/useSteps.ts');

describe('Test in <Summary /> page', () => {
    (useBookings as Mock).mockReturnValue({
        selectedService: selectedServiceMock,
        selectedTimeSlot: selectedTimeSlotMock
    });

    (useSteps as Mock).mockReturnValue({
        setCurrentStep: setCurrentStepMock,
        currentStep: serviceSteps[2], 
        steps: serviceSteps
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match snapshot', () => {
        const { container } = renderPage();
        expect(container).toMatchSnapshot();
    });

    it('should render props of selectedService and selectedTimeSlot', () => {
        renderPage();

        const title = screen.getByRole<HTMLHeadingElement>('heading', { level: 2 });
        const paragraph = screen.queryByText<HTMLParagraphElement>('Fecha:', { exact: false });

        expect(title).toBeTruthy();
        expect(title.innerHTML).toBe(`Servicio: ${ selectedServiceMock.name }`);

        expect(paragraph).toBeTruthy();
        expect(paragraph?.innerHTML).toBe(`Fecha: ${ date.format(selectedTimeSlotMock.date, 'DD/MM/YYYY') } ${ selectedTimeSlotMock.hour }`);
    });

    it('should call setCurrentStep and navigate when prev button is clicked', async () => {
        renderPage();

        const button = screen.getByText<HTMLButtonElement>('Anterior');
        await userEvent.click(button);

        expect(rrdUseNavigateMock).toHaveBeenCalledTimes(1);
        expect(rrdUseNavigateMock).toHaveBeenCalledWith('/bookings/time-slots');

        expect(setCurrentStepMock).toHaveBeenCalledTimes(1);
        expect(setCurrentStepMock).toHaveBeenCalledWith(2);
    });

    it('should call location.reload and alert when confirm button is clicked', async () => {
        renderPage();

        const button = screen.getByText<HTMLButtonElement>('Confirmar');
        await userEvent.click(button);

        expect(locationReloadMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith('Gracias por su reserva! :D');
    });

    it('should call Navigate component when selectedService or selectedTimeSlot is null', () => {
        (useBookings as Mock).mockReturnValue({
            selectedService: null,
            selectedTimeSlot: null
        });

        renderPage();

        expect(rrdNavigateMock).toHaveBeenCalledTimes(1);
        expect(rrdNavigateMock).toHaveBeenCalledWith({ to: '/bookings' });
    });
});