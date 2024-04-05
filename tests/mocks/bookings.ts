import { Service } from '../../src/modules/bookings';

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

export const setSelectedServiceMock = vi.fn();