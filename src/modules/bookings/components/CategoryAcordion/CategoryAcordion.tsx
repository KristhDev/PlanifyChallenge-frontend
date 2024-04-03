import { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import clsx from 'clsx';

import { ServiceCard } from '../ServiceCard';

export const CategoryAcordion = (): JSX.Element => {
    const [ openAcordion, setOpenAcordion ] = useState<boolean>(false);

    return (
        <div className="p-2">
            <button 
                type="button"
                onClick={ () => setOpenAcordion(!openAcordion) }
                className="bg-neutral-200 py-2 px-3 text-lg text-violet-600 font-bold rounded-xl cursor-pointer flex items-center justify-between w-full"
            >
                Manos y pies
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
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    );
}