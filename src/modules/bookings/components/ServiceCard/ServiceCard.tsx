import { Button } from '../../../ui';

export const ServiceCard = (): JSX.Element => {
    return (
        <article className="bg-white rounded-lg shadow-md border-[1px] border-neutral-200 p-3">
            <h2 className="text-neutral-800 text-base mb-2">Esculpido (Solo en 1 uña)</h2>
            <p className="text-neutral-500 text-base mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eos voluptates esse?</p>

            <div className="flex flex-row justify-end">
                <Button>
                    Seleccionar
                </Button>
            </div>
        </article>
    );
}