import { renderUseBookings } from '../../../../../setups';

describe('Test in useBookings hook - hook properties', () => {
    it('should return respective properties', () => {
        const { result } = renderUseBookings();

        expect(result.current).toEqual({
            categories: expect.any(Array),
            isCategoriesLoading: expect.any(Boolean),
            isTimeSlotsOfSelectedServiceLoading: expect.any(Boolean),
            selectedService: null,
            selectedTimeSlot: null,
            timeSlotsOfSelectedService: expect.any(Array),

            loadCategories: expect.any(Function),
            loadTimeSlotsOfSelectedService: expect.any(Function),
            setSelectedService: expect.any(Function),
            setSelectedTimeSlot: expect.any(Function)
        });
    });
});