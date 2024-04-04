export const getEnvs = () => {
    const envs = {
        VITE_API_URL: (typeof window !== 'undefined') ? import.meta.env.VITE_API_URL : process.env.VITE_API_URL
    }

    return envs;
}