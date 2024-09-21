/**
 * Determines current locale from current path. The only two supported languages are english (en) and german (de), where english is the default language (has no path prefix).
 */
export function getCurrentLocale(path: string) {
    return "de";
}

/**
 * Returns a link that points to the current page in the desired locale
 * @param path 
 * @param locale 
 * @param currentLocale 
 * @returns 
 */
export function getLinkToLocale(path: string, locale: string, currentLocale: string) {
    return path;
}