import { renderHook } from '@testing-library/react'

/* Modules */
import { BookingsContextProps, BookingsProvider, useBookings } from '../../src/modules/bookings';

/**
 * Renders a custom hook for managing bookings within a context provider.
 *
 * @return {HookReturnValue} The hook returned by the custom hook with the specified context provider.
 */
export const renderUseBookings = () => {
    return renderHook<BookingsContextProps, BookingsContextProps>(() => useBookings(), { 
        wrapper: ({ children }) => (
            <BookingsProvider>
                { children }
            </BookingsProvider>
        ) 
    });
}