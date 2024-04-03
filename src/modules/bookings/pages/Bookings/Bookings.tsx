import { ProgressBar, Spinner } from '../../../ui';
import { CategoryAcordion } from '../../components';

import { useBookings } from '../../hooks';

const Bookings = (): JSX.Element => {
    const { categories, isCategoriesLoading } = useBookings();

    return (
        <div className="flex justify-center h-max">
            <div className="flex flex-col lg:w-7/12 xl:w-6/12 2xl:w-5/12">
                <ProgressBar />

                { (isCategoriesLoading) ? (
                    <div className="flex items-center justify-center mt-32">
                        <Spinner className="w-32 h-32 border-4" />
                    </div>
                ) : (
                    <div className="bg-white border-[1px] border-gray-300 p-2 grid grid-cols-1 rounded-2xl shadow-md">
                        { categories.map((category, index) => (
                            <CategoryAcordion 
                                category={ category }
                                key={ `${ category.name }-${ index }` } 
                            />  
                        )) }
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Bookings;