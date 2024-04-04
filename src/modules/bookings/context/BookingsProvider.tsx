import { FC, PropsWithChildren, useCallback, useEffect, useMemo, useReducer } from 'react';

/* API */
import { fetchApi } from '../../../api';

/* Context */
import { BookingsContext, bookingsReducer } from './';

/* Interfaces */
import { BookingsState, Category, SelectedTimeSlot, Service, TimeSlot } from '../interfaces';

const INITIAL_STATE: BookingsState = {
    categories: [],
    isCategoriesLoading: true,
    isTimeSlotsOfSelectedServiceLoading: false,
    selectedService: null,
    selectedTimeSlot: null,
    timeSlotsOfSelectedService: []
}

const BookingsProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const [ state, dispatch ] = useReducer(bookingsReducer, INITIAL_STATE);

    const setIsCategoriesLoading = useCallback((isLoading: boolean): void => {
        dispatch({ type: '[Bookings] Set is categories loading', payload: { isLoading } });
    }, []);

    const setIsTimeSlotsOfSelectedServiceLoading = useCallback((isLoading: boolean): void => {
        dispatch({ type: '[Bookings] Set is time slots of selected service loading', payload: { isLoading } });
    }, []);

    const setSelectedTimeSlot = useCallback((timeSlot: SelectedTimeSlot | null): void => {
        dispatch({ type: '[Bookings] Set selected time slot', payload: { timeSlot } });
    }, []);

    /**
     * A function that loads categories.
     *
     * @return {Promise<void>} - a promise that resolves when the categories are loaded
     */
    const loadCategories = useCallback(async (): Promise<void> => {
        try {
            setIsCategoriesLoading(true);
            const services = await fetchApi<Service[]>('/services', { method: 'GET' });

            const categoriesMap: { [key: string]: Service[] } = {};

            services.forEach((service) => {
                if (service.category in categoriesMap) categoriesMap[service.category].push(service);
                else categoriesMap[service.category] = [ service ];
            });

            const categories: Category[] = Object.keys(categoriesMap).map((category) => ({
                name: category,
                services: categoriesMap[category]
            }))

            dispatch({ type: '[Bookings] Set categories', payload: { categories } });
        } 
        catch (error) {
            console.error(error);
        }
        finally {
            setIsCategoriesLoading(false);
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
            setIsTimeSlotsOfSelectedServiceLoading(true);

            const timeSlots = await fetchApi<TimeSlot[]>(`/time-slots?serviceId=${ serviceId }`, { method: 'GET' });

            dispatch({ type: '[Bookings] Set time slots of selected service', payload: { timeSlots } });
        } 
        catch (error) {
            console.error(error);
        }
        finally {
            setIsTimeSlotsOfSelectedServiceLoading(false);
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
        setSelectedService,
        setSelectedTimeSlot
    }), [
        state,
        loadCategories,
        loadTimeSlotsOfSelectedService,
        setSelectedService,
        setSelectedTimeSlot
    ]);

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        if (!state.selectedService) return;
        loadTimeSlotsOfSelectedService(state.selectedService.id);

    }, [ state.selectedService?.id ])

    useEffect(() => {
        if (!state.selectedService) return;
        setSelectedTimeSlot(null);

    }, [ state.selectedService?.id ]);

    return (
        <BookingsContext.Provider value={ store }>
            { children }
        </BookingsContext.Provider>
    );
}

export default BookingsProvider;