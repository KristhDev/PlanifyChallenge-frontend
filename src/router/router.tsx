import { createBrowserRouter, Navigate } from 'react-router-dom';

/* Modules */
import { bookingsRoutes } from '../modules/bookings';
import { MainLayout } from '../modules/ui';

export const rootRouter = createBrowserRouter([
    {
        path: 'bookings',
        element: (<MainLayout />),
        children: bookingsRoutes
    },
    {
        path: '*',
        element: (<Navigate to="/bookings" replace />),
    }
]);