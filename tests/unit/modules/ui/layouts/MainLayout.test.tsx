import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';

import { MainLayout } from '../../../../../src/modules/ui';

const router = createMemoryRouter([ 
    { 
        path: '', 
        element: (<MainLayout />),
        children: [
            { 
                path: 'bookings', 
                element: (<h1>Reservar</h1>) 
            },
        ]
    } 
], { initialEntries: [ '/bookings' ] });

const renderComponent = () => render(<RouterProvider router={router} />)

describe('Test in <MainLayout /> layout', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });
});