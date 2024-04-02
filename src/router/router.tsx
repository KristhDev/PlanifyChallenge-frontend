import { createBrowserRouter } from 'react-router-dom';

/* Modules */
import { bookingsRoutes } from '../modules/bookings';

export const rootRouter = createBrowserRouter([
    {
        path: '',
        children: bookingsRoutes
    }
]);