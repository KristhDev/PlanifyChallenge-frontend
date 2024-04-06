import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/* Modules */
import { Navbar } from '../../../../../src/modules/ui';

const router = createMemoryRouter([
    {
        path: '/bookings',
        element: (
            <div>
                <Navbar />
                <h1>Reservar</h1>
            </div>
        )
    },
    {
        path: '/my-shifts',
        element: (
            <div>
                <Navbar />
                <h1>Mis turnos</h1>
            </div>
        )
    }
], { initialEntries: [ '/bookings' ] });

const renderComponent = () => render(<RouterProvider router={ router } />);

describe('Test in <Navbar /> component', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should active link correctly', async () => {
        renderComponent();

        const myShiftsLink = screen.getByRole<HTMLAnchorElement>('link', { name: 'Mis turnos' });
        await userEvent.click(myShiftsLink);

        expect(myShiftsLink.className).toContain('text-violet-600');
    });
});