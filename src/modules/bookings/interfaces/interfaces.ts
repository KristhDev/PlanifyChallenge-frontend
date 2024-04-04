export type Service = {
    id: number;
    name: string;
    description: string;
    category: string;
}

export type TimeSlot = {
    serviceId: number;
    date: string;
    availableTimeslots: string[];
}

export type Category = {
    name: string;
    services: Service[];
}

export type SelectedTimeSlot = {
    serviceId: number;
    date: string;
    hour: string;
}

export interface BookingsState {
    categories: Category[];
    isCategoriesLoading: boolean;
    isTimeSlotsOfSelectedServiceLoading: boolean;
    selectedService: Service | null;
    selectedTimeSlot: SelectedTimeSlot | null;
    timeSlotsOfSelectedService: TimeSlot[];
}

export interface BookingsContextProps extends BookingsState {
    loadCategories: () => Promise<void>;
    loadTimeSlotsOfSelectedService: (serviceId: number) => Promise<void>;
    setSelectedService: (service: Service) => void;
    setSelectedTimeSlot: (timeSlot: SelectedTimeSlot | null) => void;
}