import { render } from '@testing-library/react';

import { MyShifts } from '../../../../../src/modules/bookings';

const renderComponent = () => render(<MyShifts />);

describe('Test in <MyShifts /> page', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });
});