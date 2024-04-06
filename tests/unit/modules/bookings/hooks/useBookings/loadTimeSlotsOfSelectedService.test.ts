import { waitFor } from '@testing-library/react';

import { renderUseBookings } from '../../../../../setups';

import { fetchApiSpy, serviceMock } from '../../../../../mocks';

describe('Test in useBookings hook - loadTimeSlotsOfSelectedService', () => {
    beforeEach(() => {
        fetchApiSpy.mockClear();
    });

    it('should load time slots of selected service', async () => {
        const { result } = renderUseBookings();

        await waitFor(async () => {
            await result.current.loadCategories();
            result.current.setSelectedService(serviceMock);
        });

        await waitFor(async () => {
            await result.current.loadTimeSlotsOfSelectedService(serviceMock.id);
        });

        expect(result.current.isTimeSlotsOfSelectedServiceLoading).toBeFalsy();
        expect(result.current.timeSlotsOfSelectedService.length).toBeGreaterThan(0);
    });

    it('should faild becuase trow an error', async () => {
        const { result } = renderUseBookings();

        await waitFor(async () => {
            await result.current.loadCategories();
            result.current.setSelectedService(serviceMock);
        });

        fetchApiSpy.mockRejectedValue(new Error('Failed to load time slots of selected service'));

        await waitFor(async () => {
            await result.current.loadTimeSlotsOfSelectedService(serviceMock.id);
        });

        expect(result.current.isTimeSlotsOfSelectedServiceLoading).toBeFalsy();
        expect(result.current.timeSlotsOfSelectedService).toEqual([]);
        expect(result.current.timeSlotsOfSelectedService).toHaveLength(0);
    });
});