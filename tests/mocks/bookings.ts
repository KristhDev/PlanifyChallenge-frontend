/* Interfaces */
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

export const servicesMock: Service[] = [ 
    {
        id: 1,
        name: 'Classic Manicure',
        description: 'Includes filing, moisturizing, and permanent polish application.',
        category: 'Hands and Feet'
    },
    {
        id: 2,
        name: 'Spa Pedicure',
        description: 'Spa pedicure with paraffin bath for soft and relaxed feet.',
        category: 'Hands and Feet'
    },
    {
        id: 3,
        name: 'Cut and Style',
        description: 'Custom haircut plus washing and styling.',
        category: 'Hair'
    },
    {
        id: 4,
        name: 'Full Color',
        description: 'Full hair coloring with ammonia-free products.',
        category: 'Hair'
    },
    {
        id: 5,
        name: 'Deep Tissue Massage',
        description: 'Intense massage to alleviate muscle tension.',
        category: 'Massage and Spa'
    },
    {
        id: 6,
        name: 'Anti-Aging Facial',
        description: 'Rejuvenating facial treatment with natural products.',
        category: 'Facial Care'
    },
    {
        id: 7,
        name: 'Waxing',
        description: 'Body waxing for smooth, hair-free skin.',
        category: 'Hair Removal'
    },
    {
        id: 8,
        name: 'Hair Treatment',
        description: 'Repairing treatment for damaged or dyed hair.',
        category: 'Hair'
    },
    {
        id: 9,
        name: 'Professional Makeup',
        description: 'Makeup services for special events.',
        category: 'Makeup'
    },
    {
        id: 10,
        name: 'Facial Cleansing',
        description: 'Deep cleansing with impurity extraction and mask application.',
        category: 'Facial Care'
    }
];

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

export const categoriesMock: Category[] = [ 
    categoryMock,
    { ...categoryMock, name: 'Nails', },
    { ...categoryMock, name: 'Makeup', }
];

export const setSelectedServiceMock = vi.fn();
export const setSelectedTimeSlotMock = vi.fn();