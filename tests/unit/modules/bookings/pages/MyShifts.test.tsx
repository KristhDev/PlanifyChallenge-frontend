import { render } from '@testing-library/react';

/* Modules */
import { MyShifts } from '../../../../../src/modules/bookings';

const renderComponent = () => render(<MyShifts />);

describe('Test in <MyShifts /> page', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });
});