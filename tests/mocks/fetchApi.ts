import * as api from '../../src/api';

export const fetchApiSpy = vi.spyOn(api, 'fetchApi');
export const fetchSpy = vi.spyOn(global, 'fetch');