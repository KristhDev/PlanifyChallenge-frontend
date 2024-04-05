import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { selectedServiceMock, selectedTimeSlotMock, setSelectedTimeSlotMock, timeSlotMock } from '../../../../mocks';

import { TimeSlot, TimeSlotSelector, useBookings } from '../../../../../src/modules/bookings';

import { date } from '../../../../../src/utils';

const renderComponent = (timeSlot: TimeSlot) => render(
    <TimeSlotSelector timeSlot={ timeSlot } />
);

vi.mock('../../../../../src/modules/bookings/hooks/useBookings.ts');

describe('Test in <TimeSlotSelector /> component', () => {
    (useBookings as Mock).mockReturnValue({
        setSelectedTimeSlot: setSelectedTimeSlotMock,
        selectedService: selectedServiceMock,
        selectedTimeSlot: null
    });

    it('should to match snapshot', () => {
        const { container } = renderComponent(timeSlotMock);
        expect(container).toMatchSnapshot();
    });

    it('should render props of time slot', () => {
        renderComponent(timeSlotMock);

        const title = screen.getByRole<HTMLHeadingElement>('heading', { level: 2 });
        const btnsTimeSlots = screen.getAllByRole<HTMLButtonElement>('button');

        expect(title).toBeTruthy();
        expect(title.innerHTML).toBe( date.format(timeSlotMock.date, 'DD [de] MMMM') );

        expect(btnsTimeSlots).toBeTruthy();

        btnsTimeSlots.forEach((button, index) => {
            expect(button.innerHTML).toBe(timeSlotMock.availableTimeslots[index]);
        });
    });

    it('should call setSelectedTimeSlot when one button of time slot is clicked', async () => {
        renderComponent(timeSlotMock);

        const button = screen.getAllByRole<HTMLButtonElement>('button')[0];
        await userEvent.click(button);

        expect(setSelectedTimeSlotMock).toHaveBeenCalledTimes(1);
        expect(setSelectedTimeSlotMock).toHaveBeenCalledWith({
            date: timeSlotMock.date,
            hour: button.innerHTML,
            serviceId: selectedServiceMock.id
        });
    });

    it('should inactive one button when time slot is selected', () => {
        (useBookings as Mock).mockReturnValue({
            setSelectedTimeSlot: setSelectedTimeSlotMock,
            selectedService: selectedServiceMock,
            selectedTimeSlot: selectedTimeSlotMock
        });

        renderComponent(timeSlotMock);

        const button = screen.getByText<HTMLButtonElement>(selectedTimeSlotMock.hour);

        expect(button).toBeDefined();
        expect(button.disabled).toBeTruthy();
    });
});