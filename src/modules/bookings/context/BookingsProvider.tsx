import { FC, PropsWithChildren, useCallback, useMemo, useReducer } from 'react';

/* Context */
import { BookingsContext, bookingsReducer } from './';

/* Interfaces */
import { BookingsState, Service } from '../interfaces';

const INITIAL_STATE: BookingsState = {
    categories: [],
    selectedService: null,
    timeSlotsOfSelectedService: []
}

const BookingsProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const [ state, dispatch ] = useReducer(bookingsReducer, INITIAL_STATE);

    /**
     * A function that loads categories.
     *
     * @return {Promise<void>} - a promise that resolves when the categories are loaded
     */
    const loadCategories = useCallback(async (): Promise<void> => {
        try {
            dispatch({ type: '[Bookings] Set categories', payload: { categories: [] } });
        } 
        catch (error) {
            console.error(error);
        }
    }, []);

    /**
     * Loads time slots for the selected service.
     *
     * @param {number} serviceId - The ID of the selected service
     * @return {Promise<void>} 
     */
    const loadTimeSlotsOfSelectedService = useCallback(async (serviceId: number): Promise<void> => {
        try {
            console.log({ serviceId });
            dispatch({ type: '[Bookings] Set time slots of selected service', payload: { timeSlots: [] } });
        } 
        catch (error) {
            console.error(error);
        }
    }, []);

    /**
     * A function that sets the selected service.
     *
     * @param {Service} service - the service to be set as selected
     * @return {void} 
     */
    const setSelectedService = useCallback((service: Service): void => {
        dispatch({ type: '[Bookings] Set selected service', payload: { service } });
    }, []);

    const store = useMemo(() => ({
        ...state,
        loadCategories,
        loadTimeSlotsOfSelectedService,
        setSelectedService
    }), [
        state,
        loadCategories,
        loadTimeSlotsOfSelectedService,
        setSelectedService
    ]);

    return (
        <BookingsContext.Provider value={ store }>
            { children }
        </BookingsContext.Provider>
    );
}

export default BookingsProvider;