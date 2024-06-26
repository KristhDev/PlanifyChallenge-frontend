import { BookingsState, Category, SelectedTimeSlot, Service, TimeSlot } from '../interfaces';

type BookingsAction = 
    | { type: '[Bookings] Set categories', payload: { categories: Category[] } }
    | { type: '[Bookings] Set is categories loading', payload: { isLoading: boolean } }
    | { type: '[Bookings] Set is time slots of selected service loading', payload: { isLoading: boolean } }
    | { type: '[Bookings] Set selected service', payload: { service: Service } }
    | { type: '[Bookings] Set selected time slot', payload: { timeSlot: SelectedTimeSlot | null } }
    | { type: '[Bookings] Set time slots of selected service', payload: { timeSlots: TimeSlot[] } }

/**
 * Reducer function for managing bookings state.
 *
 * @param {BookingsState} state - current bookings state
 * @param {BookingsAction} action - action to be performed
 * @return {BookingsState} updated bookings state
 */
const bookingsReducer = (state: BookingsState, action: BookingsAction): BookingsState => {
    switch (action.type) {
        case '[Bookings] Set categories':
            return {
                ...state,
                categories: action.payload.categories
            }

        case '[Bookings] Set is categories loading':
            return {
                ...state,
                isCategoriesLoading: action.payload.isLoading
            }

        case '[Bookings] Set is time slots of selected service loading':
            return {
                ...state,
                isTimeSlotsOfSelectedServiceLoading: action.payload.isLoading
            }

        case '[Bookings] Set selected service':
            return {
                ...state,
                selectedService: action.payload.service
            }

        case '[Bookings] Set selected time slot':
            return {
                ...state,
                selectedTimeSlot: action.payload.timeSlot
            }

        case '[Bookings] Set time slots of selected service':
            return {
                ...state,
                timeSlotsOfSelectedService: action.payload.timeSlots
            }

        default:
            return state;
    }
}

export default bookingsReducer;