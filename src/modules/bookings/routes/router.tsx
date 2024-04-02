import { RouteObject } from 'react-router-dom';

/* Routes */
import { bookingsRoutesPaths } from './routes';

/* Pages */
import { Bookings } from '../pages';

export const bookingsRoutes: RouteObject[] = [
    {
        path: bookingsRoutesPaths.BOOKINGS,
        element: (<Bookings />)
    }
];