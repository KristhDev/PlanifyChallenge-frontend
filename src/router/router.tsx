import { createBrowserRouter, Navigate } from 'react-router-dom';

/* Modules */
import { bookingsRoutes, MyShifts } from '../modules/bookings';
import { MainLayout } from '../modules/ui';

export const rootRouter = createBrowserRouter([
    {
        path: 'bookings',
        element: (<MainLayout />),
        children: bookingsRoutes
    },
    {
        path: 'my-shifts',
        element: (<MainLayout />),
        children: [
            { path: '', element: (<MyShifts />) },
        ]
    },
    {
        path: '*',
        element: (<Navigate to="/bookings" replace />),
    }
]);