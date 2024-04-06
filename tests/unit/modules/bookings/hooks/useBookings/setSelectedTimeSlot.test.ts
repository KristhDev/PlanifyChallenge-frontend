import { waitFor } from '@testing-library/react';

import { renderUseBookings } from '../../../../../setups';

import { selectedTimeSlotMock } from '../../../../../mocks';

describe('Test in useBookings hook - setSelectedTimeSlot', () => {
    it('should initial value is null', () => {
        const { result } = renderUseBookings();
        expect(result.current.selectedTimeSlot).toBeNull();
    });

    it('should set selected time slot', async () => {
        const { result } = renderUseBookings();

        await waitFor(() => {
            result.current.setSelectedTimeSlot(selectedTimeSlotMock);
        });

        expect(result.current.selectedTimeSlot).toEqual(selectedTimeSlotMock);
    });
});