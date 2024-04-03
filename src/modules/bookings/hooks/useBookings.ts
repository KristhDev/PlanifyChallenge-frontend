import { useContext } from 'react';

/* Contexts */
import { BookingsContext } from '../context';

/* Interfaces */
import { BookingsContextProps } from '../interfaces';

/**
 * A custom hook that returns the BookingsContext.
 *
 * @return {BookingsContextProps} The BookingsContext.
 */
const useBookings = (): BookingsContextProps => {
    return useContext(BookingsContext);
}

export default useBookings;