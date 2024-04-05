import { Category, SelectedTimeSlot, Service, TimeSlot } from '../../src/modules/bookings';

export const selectedServiceMock: Service = {
    id: 1,
    name: 'Classic Manicure',
    description: 'Includes filing, moisturizing, and permanent polish application.',
    category: 'Hands and Feet'
}

export const serviceMock: Service = {
    id: 2,
    name: 'Spa Pedicure',
    description: 'Spa pedicure with paraffin bath for soft and relaxed feet.',
    category: 'Hands and Feet'
}

export const timeSlotMock: TimeSlot = {
    availableTimeslots: [ '9:00', '9:30', '10:00', '10:30', '11:00' ],
    date: '2024-04-05',
    serviceId: 1
}

export const timeSlotsOfSelectedServiceMock: TimeSlot[] = [ timeSlotMock ];

export const selectedTimeSlotMock: SelectedTimeSlot = {
    date: '2024-04-05',
    hour: '10:00',
    serviceId: 1
}

export const categoryMock: Category = {
    name: 'Hands and Feet',
    services: [ serviceMock, serviceMock ]
}

export const setSelectedServiceMock = vi.fn();
export const setSelectedTimeSlotMock = vi.fn();