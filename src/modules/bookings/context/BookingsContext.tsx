import { createContext } from 'react';

/* Interfaces */
import { BookingsContextProps } from '../interfaces';

const BookingsContext = createContext<BookingsContextProps>({} as BookingsContextProps);

export default BookingsContext;