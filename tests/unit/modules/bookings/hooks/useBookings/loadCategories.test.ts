import { waitFor } from '@testing-library/react';

import { renderUseBookings } from '../../../../../setups';

import { fetchApiSpy } from '../../../../../mocks';

describe('Test in useBookings hook - loadCategories', () => {
    beforeEach(() => {
        fetchApiSpy.mockClear();
    });

    it('should load categories', async () => {
        const { result } = renderUseBookings();

        await waitFor(async () => {
            await result.current.loadCategories();
        });

        expect(result.current.isCategoriesLoading).toBeFalsy();
        expect(result.current.categories.length).toBeGreaterThan(0);
    });

    it('should faild becuase trow an error', async () => {
        fetchApiSpy.mockRejectedValue(new Error('Failed to load categories'));

        const { result } = renderUseBookings();

        await waitFor(async () => {
            await result.current.loadCategories();
        });

        expect(result.current.categories).toEqual([]);
        expect(result.current.categories).toHaveLength(0);
        expect(result.current.isCategoriesLoading).toBeFalsy();
    });
});