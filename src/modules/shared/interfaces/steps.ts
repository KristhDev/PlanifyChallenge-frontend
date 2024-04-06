export type Step = {
    number: number;
    title: string;
}

export interface StepsState {
    steps: Step[];
    currentStep: Step;
}

export interface StepsContextProps extends StepsState {
    setCurrentStep: (step: number) => void;
}

export interface StepsProviderProps extends StepsState {}