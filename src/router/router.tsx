import { createBrowserRouter } from 'react-router-dom';

/* Modules */
import { bookingsRoutes } from '../modules/bookings';
import { MainLayout } from '../modules/ui';

export const rootRouter = createBrowserRouter([
    {
        path: '',
        element: (<MainLayout />),
        children: bookingsRoutes
    }
]);