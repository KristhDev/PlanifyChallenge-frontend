import { render, screen } from '@testing-library/react';

/* Modules */
import { Button } from '../../../../../src/modules/ui';

const renderComponent = () => render(
    <Button className="bg-red-500">
        Test
    </Button>
);

describe('Test in <Button /> component', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render props', () => {
        renderComponent();

        const btn = screen.queryByRole<HTMLButtonElement>('button')

        expect(btn?.childNodes[0].textContent).toBe('Test');
        expect(btn?.className).toContain('bg-red-500');
    });
});