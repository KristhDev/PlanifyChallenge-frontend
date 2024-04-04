export type Step = {
    number: number;
    title: string;
}

export interface StepsState {
    steps: Step[];
    currentStep: Step;
}