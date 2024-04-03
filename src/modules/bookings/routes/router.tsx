import { RouteObject } from 'react-router-dom';

/* Routes */
import { bookingsRoutesPaths } from './routes';

/* Pages */
import { Bookings, Summary, TimeSlots } from '../pages';

export const bookingsRoutes: RouteObject[] = [
    {
        path: bookingsRoutesPaths.BOOKINGS,
        element: (<Bookings />)
    },
    {
        path: bookingsRoutesPaths.TIME_SLOTS,
        element: (<TimeSlots />)
    },
    {
        path: bookingsRoutesPaths.SUMMARY,
        element: (<Summary />)
    }
];