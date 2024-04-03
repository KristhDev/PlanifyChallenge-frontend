export type Service = {
    id: number;
    name: string;
    description: string;
    category: string;
}

export type TimeSlot = {
    serviceId: number;
    date: string;
    availableTimeSlots: string[];
}

export type Category = {
    name: string;
    services: Service[];
}

export interface BookingsState {
    categories: Category[];
    selectedService: Service | null;
    timeSlotsOfSelectedService: TimeSlot[];
}

export interface BookingsContextProps extends BookingsState {
    loadCategories: () => Promise<void>;
    loadTimeSlotsOfSelectedService: (serviceId: number) => Promise<void>;
    setSelectedService: (service: Service) => void;
}