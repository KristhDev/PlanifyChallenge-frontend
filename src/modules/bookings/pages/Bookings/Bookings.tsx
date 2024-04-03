import { ProgressBar } from '../../../ui';
import { CategoryAcordion } from '../../components';

const Bookings = (): JSX.Element => {
    return (
        <div className="flex flex-col h-max">
            <ProgressBar />

            <div className="bg-white border-[1px] border-gray-300 p-2 flex flex-col rounded-2xl shadow-md">
                <CategoryAcordion />
                <CategoryAcordion />
                <CategoryAcordion />
                <CategoryAcordion />
            </div>
        </div>
    );
}

export default Bookings;