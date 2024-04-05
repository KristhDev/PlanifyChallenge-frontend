import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { selectedServiceMock, serviceMock, setSelectedServiceMock } from '../../../../mocks';

import { Service, ServiceCard, useBookings } from '../../../../../src/modules/bookings';

const renderComponent = (service: Service) => render(
    <ServiceCard service={ service } />
);

vi.mock('../../../../../src/modules/bookings/hooks/useBookings.ts');

describe('Test in <ServiceCard /> component', () => {
    (useBookings as Mock).mockReturnValue({
        selectedService: selectedServiceMock,
        setSelectedService: setSelectedServiceMock
    });

    it('should to match snapshot', () => {
        const { container } = renderComponent(serviceMock);
        expect(container).toMatchSnapshot();
    });

    it('should render props of service correctly', () => {
        renderComponent(serviceMock);

        const title = screen.queryByText<HTMLHeadingElement>(serviceMock.name);
        const description = screen.queryByText<HTMLParagraphElement>(serviceMock.description);

        expect(title).toBeTruthy();
        expect(title?.innerHTML).toBe(serviceMock.name);

        expect(description).toBeTruthy();
        expect(description?.innerHTML).toBe(serviceMock.description);
    });

    it('should call setSelectedService when button is clicked', async () => {
        renderComponent(serviceMock);

        const button = screen.getByRole<HTMLButtonElement>('button');
        await userEvent.click(button);

        expect(setSelectedServiceMock).toHaveBeenCalledTimes(1);
        expect(setSelectedServiceMock).toHaveBeenCalledWith(serviceMock);
    });

    it('should inactive button when service is selected', () => {
        renderComponent(selectedServiceMock);

        const button = screen.getByRole<HTMLButtonElement>('button');

        expect(button.className).toContain('disabled:bg-violet-800');
        expect(button.disabled).toBeTruthy();
        expect(button.innerHTML).toBe('Seleccionado');
    });
});