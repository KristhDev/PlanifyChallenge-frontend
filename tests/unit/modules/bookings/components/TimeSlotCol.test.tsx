import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';

import { selectedServiceMock, setSelectedTimeSlotMock, timeSlotsOfSelectedServiceMock } from '../../../../mocks';

import { TimeSlotCol, useBookings } from '../../../../../src/modules/bookings';

const renderComponent = () => render(<TimeSlotCol />);

vi.mock('../../../../../src/modules/bookings/hooks/useBookings.ts');

describe('Test in <TimeSlotCol /> component', () => {
    (useBookings as Mock).mockReturnValue({
        setSelectedTimeSlot: setSelectedTimeSlotMock,
        selectedService: selectedServiceMock,
        selectedTimeSlot: null,
        timeSlotsOfSelectedService: timeSlotsOfSelectedServiceMock
    });

    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render time slots of selected service', () => {
        renderComponent();

        const timeSlotsSections = screen.getAllByRole('heading', { level: 2 });
        expect(timeSlotsSections).toHaveLength(timeSlotsOfSelectedServiceMock.length);
    });
});