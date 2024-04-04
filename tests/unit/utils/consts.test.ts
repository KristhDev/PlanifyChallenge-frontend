import { serviceSteps } from '../../../src/utils';

describe('Test in consts util', () => {
    it('should to match snapshot', () => {
        expect(serviceSteps).toMatchSnapshot();
    });
});