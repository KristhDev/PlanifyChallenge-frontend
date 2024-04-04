import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BottomTabs } from '../../../../../src/modules/ui';

const router = createMemoryRouter([
    { 
        path: 'bookings',
        element: (
            <div>
                <h1>Reservar</h1>
                <BottomTabs />
            </div>
        ) 
    },
    {
        path: 'my-shifts',
        element: (
            <div>
                <h1>Mis turnos</h1>
                <BottomTabs />
            </div>
        )
    }
], { initialEntries: [ '/bookings' ] });

const renderComponent = () => render(<RouterProvider router={ router } />);

describe('Test in <BottomTabs /> component', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should active tab correctly', async () => {
        renderComponent();

        const myShiftsTab = screen.getByRole<HTMLAnchorElement>('link', { name: 'Mis turnos' });
        await userEvent.click(myShiftsTab);

        expect(myShiftsTab.className).toContain('bg-neutral-200 text-violet-600 border-violet-600');
    });
});