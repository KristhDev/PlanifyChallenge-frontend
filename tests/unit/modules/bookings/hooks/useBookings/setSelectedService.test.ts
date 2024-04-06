import { waitFor } from '@testing-library/react';

import { renderUseBookings } from '../../../../../setups';

import { selectedServiceMock } from '../../../../../mocks';

describe('Test in useBookings hook - setSelectedService', () => {
    it('should initial value is null', () => {
        const { result } = renderUseBookings();
        expect(result.current.selectedService).toBeNull();
    });

    it('should set selected service', async () => {
        const { result } = renderUseBookings();

        await waitFor(() => {
            result.current.setSelectedService(selectedServiceMock);
        });

        expect(result.current.selectedService).toEqual(selectedServiceMock);
    });
});