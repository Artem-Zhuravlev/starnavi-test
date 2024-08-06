import dayjs from 'dayjs'

export const FULL_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 * Formats a date according to the specified format string.
 *
 * @param {Date | string} date - The date to format. Can be a Date object or a string.
 * @param {string} [format='yyyy-mm-dd'] - The format string. Supports 'YYYY', 'MM', 'DD', 'HH', 'mm', and 'ss'.
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date | string, format: string = 'MM.DD.YYYY'): string {
  return dayjs(date).format(format)
}
