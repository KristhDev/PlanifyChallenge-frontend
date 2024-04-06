import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Mocks */
import { categoryMock, selectedServiceMock, setSelectedServiceMock } from '../../../../mocks';

/* Modules */
import { CategoryAcordion, useBookings } from '../../../../../src/modules/bookings';

vi.mock('../../../../../src/modules/bookings/hooks/useBookings.ts');

describe('Test in <CategoryAcordion /> component', () => {
    (useBookings as Mock).mockReturnValue({
        selectedService: selectedServiceMock,
        setSelectedService: setSelectedServiceMock
    });

    const renderComponent = () => render(<CategoryAcordion category={ categoryMock } />);

    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render props of category correctly', () => {
        renderComponent();

        const button = screen.getByTestId<HTMLButtonElement>('category-accordion-button');

        expect(button).toBeTruthy();
        expect(button.innerHTML).toContain(categoryMock.name);
    });

    it('should render services when button is clicked', async () => {
        renderComponent();

        const button = screen.getByTestId<HTMLButtonElement>('category-accordion-button');
        await userEvent.click(button);

        const services = screen.getAllByRole<HTMLDivElement>('article');
        expect(services).toHaveLength(categoryMock.services.length);
    });
});