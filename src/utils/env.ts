/**
 * Retrieves environment variables based on the platform.
 * 
 * @return {object} The environment variables object.
 */
export const getEnvs = () => {
    const envs = {
        VITE_API_URL: (typeof window !== 'undefined') ? import.meta.env.VITE_API_URL : process.env.VITE_API_URL
    }

    return envs;
}