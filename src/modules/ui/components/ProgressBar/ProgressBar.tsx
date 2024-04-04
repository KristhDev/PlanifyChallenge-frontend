import { useSteps } from '../../../shared';

export const ProgressBar = (): JSX.Element => {
    const { currentStep, steps } = useSteps();

    return (
        <div className="flex flex-col pb-6">
            <p className="text-neutral-800 text-lg mb-2">{ currentStep.title }</p>

            <div className="bg-neutral-400 rounded-xl h-8 w-full">
                <div 
                    className="bg-violet-600 rounded-lg h-8 duration-300"
                    data-testid="progress-bar-progress"
                    style={{ width: (currentStep.number / steps.length) * 100 + '%' }} 
                />
            </div>
        </div>
    );
}