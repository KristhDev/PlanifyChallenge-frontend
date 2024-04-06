/* Utils */
import { date } from '../../../src/utils';

describe('Test in date util', () => {
    it('should have respective methods', () => {
        expect(date).toEqual({
            format: expect.any(Function),
            locale: expect.any(Function)
        });
    });

    it('should format date - format', () => {
        const dateToFormat = '2024-04-04';
        const dateFormatted = '04/04/2024';

        expect(date.format(dateToFormat, 'DD/MM/YYYY')).toEqual(dateFormatted);
    });

    it('should faild format date because value is invalid - format', () => {
        const dateToFormat = 'invalid';
        expect(date.format(dateToFormat, 'DD/MM/YYYY')).toBe('Invalid Date');
    });
});