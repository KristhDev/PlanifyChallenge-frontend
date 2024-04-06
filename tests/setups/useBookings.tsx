import { renderHook } from '@testing-library/react'

import { BookingsContextProps, BookingsProvider, useBookings } from '../../src/modules/bookings';

export const renderUseBookings = () => {
    return renderHook<BookingsContextProps, BookingsContextProps>(() => useBookings(), { 
        wrapper: ({ children }) => (
            <BookingsProvider>
                { children }
            </BookingsProvider>
        ) 
    });
}