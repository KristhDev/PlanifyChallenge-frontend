import { fetchSpy } from '../../mocks';

import { fetchApi } from '../../../src/api';

import { Service } from '../../../src/modules/bookings';

describe('Test in fetchApi', () => {
    it('should to fetch data from the specified URL', async () => {
        const data = await fetchApi<Service[]>('/services', { method: 'GET' });

        expect(data.length).toBeGreaterThan(0);
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.any(String), 
            expect.objectContaining({
                method: 'GET',
                headers: expect.objectContaining({
                    'Content-Type': 'application/json'
                })
            })
        );
    });

    it('should to throw an error if the response is not ok', async () => {
        fetchSpy.mockResolvedValue({ ok: false, statusText: 'Not found', status: 404 } as Response);

        try {
            await fetchApi<Service[]>('/services', { method: 'GET' });
            expect(false).toBeTruthy();
        } 
        catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect((error as Error).message).toBe('Not found');
        }
    });
});