import { render } from '@testing-library/react';

import { Spinner } from '../../../../../src/modules/ui';

const renderComponent = () => render(<Spinner className="border-red-500" />);

describe('Test in <Spinner /> component', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render props', () => {
        renderComponent();

        const spinner = document.querySelector('span');
        expect(spinner?.className).toContain('border-red-500');
    });
});