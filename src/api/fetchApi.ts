import { getEnvs } from '../utils';

const { VITE_API_URL } = getEnvs();

/**
 * Fetches data from the specified URL using the Fetch API.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {RequestInit} init - Optional parameters for the fetch request.
 * @returns {Promise<T>} A promise that resolves to the fetched data.
 */
const fetchApi = async <T>(url: string, init?: RequestInit): Promise<T> => {
    if (init) {
        init.headers = {
            ...init.headers,
            'Content-Type': 'application/json'
        }
    }

    try {
        const resp = await fetch(`${ VITE_API_URL }${ url }`, init);

        if (!resp.ok) {
            throw {
                message: resp.statusText, 
                status: resp.status
            }
        }

        return await resp.json() as T;
    } 
    catch (error) {
        console.error(error);
        throw new Error((error as Error).message);
    }
}

export default fetchApi;