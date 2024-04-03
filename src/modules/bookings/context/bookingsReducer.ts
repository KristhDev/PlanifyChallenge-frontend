import { BookingsState, Category, Service, TimeSlot } from '../interfaces';

type BookingsAction = 
    | { type: '[Bookings] Set categories', payload: { categories: Category[] } }
    | { type: '[Bookings] Set selected service', payload: { service: Service } }
    | { type: '[Bookings] Set time slots of selected service', payload: { timeSlots: TimeSlot[] } };

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

        case '[Bookings] Set selected service':
            return {
                ...state,
                selectedService: action.payload.service
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