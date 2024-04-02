import { useSteps } from '../../../shared';

export const ProgressBar = (): JSX.Element => {
    const { currentStep, steps } = useSteps();

    return (
        <div className="flex flex-col">
            <p className="text-slate-800 text-lg mb-2">{ currentStep.title }</p>

            <div className="bg-neutral-400 rounded-lg h-8 w-full">
                <div 
                    className="bg-indigo-600 rounded-lg h-8 duration-300"
                    style={{ width: (currentStep.number / steps.length) * 100 + '%' }} 
                />
            </div>
        </div>
    );
}