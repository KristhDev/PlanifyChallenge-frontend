import { FC, useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import clsx from 'clsx';

/* Components */
import { ServiceCard } from '../ServiceCard';

/* Interfaces */
import { CategoryAcordionProps } from './interfaces';

/**
 * Renders a category accordion component.
 *
 * @param {CategoryAcordionProps} category - The category object to display
 * @return {JSX.Element} The rendered category accordion component
 */
export const CategoryAcordion: FC<CategoryAcordionProps> = ({ category }): JSX.Element => {
    const [ openAcordion, setOpenAcordion ] = useState<boolean>(false);

    return (
        <div className="p-2">
            <button 
                className="bg-neutral-100 py-2 px-3 text-lg text-violet-600 font-bold rounded-xl cursor-pointer flex items-center justify-between w-full"
                data-testid="category-accordion-button"
                onClick={ () => setOpenAcordion(!openAcordion) }
                type="button"
            >
                { category.name }
                <IoAdd size={ 24 } className={ clsx({ 'hidden': openAcordion }) } />
                <IoRemove size={ 24 } className={ clsx({ 'hidden': !openAcordion }) } />
            </button>

            <div 
                className={ 
                    clsx('grid overflow-hidden transition-all duration-300', {
                        'grid-rows-[1fr] opacity-100': openAcordion,
                        'grid-rows-[0fr] opacity-0': !openAcordion
                    }) 
                }
            >
                <div className={ clsx("overflow-hidden flex flex-col gap-4 duration-300 px-2", { 'p-2  mt-4': openAcordion  }) }>
                    { category.services.map((service, index) => (
                        <ServiceCard 
                            key={ `${ service.name }-${ index }` } 
                            service={ service } 
                        />
                    )) }
                </div>
            </div>
        </div>
    );
}