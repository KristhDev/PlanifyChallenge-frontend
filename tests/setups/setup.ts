import { createElement } from 'react';

export const rrdUseNavigateMock = vi.fn();
export const rrdNavigateMock = vi.fn();

vi.mock('react-router-dom', async (importOriginal) => {
    const actual = await importOriginal<typeof import('react-router-dom')>();

    return {
        ...actual,
        useNavigate: () => rrdUseNavigateMock,
        Navigate: (props: unknown) => {
            rrdNavigateMock(props);
            return createElement('div', { className: 'text-lg' }, 'Navigate');
        }
    }
});

export const locationReloadMock = vi.fn();
export const alertMock = vi.fn();

vi.stubGlobal('location', { reload: locationReloadMock });
vi.stubGlobal('alert', alertMock);