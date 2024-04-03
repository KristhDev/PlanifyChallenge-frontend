import dayjs, { Dayjs } from 'dayjs';

export const date = {
    /**
     * Sets the locale for the dayjs library.
     *
     * @param {string} locale - The locale to set.
     * @return {void} This function does not return a value.
     */
    locale: (locale: string): void => {
        dayjs.locale(locale);
    },

    /**
     * Formats a given date using a specified format.
     *
     * @param {string | number | Date | Dayjs | null | undefined} date - The date to format.
     * @param {string} format - The format string to use.
     * @return {string} The formatted date as a string.
     */
    format: (date: string | number | Date | Dayjs | null | undefined, format: string): string => {
        return dayjs(date).format(format);
    }
}