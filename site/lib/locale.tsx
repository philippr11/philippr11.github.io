/**
 * Determines current locale from current path. The only two supported languages are english (en) and german (de), where english is the default language (has no path prefix).
 */
export function getCurrentLocale(path: string) {
    if (path && path.startsWith("/de")) {
        return "de";
    }
    else return "en";
}

/**
 * Returns a link that points to the current page in the desired locale
 * @param path 
 * @param locale 
 * @param currentLocale 
 * @returns 
 */
export function getLinkToLocale(path: string, locale: string, currentLocale: string) {
    if (currentLocale == locale) {
        if (currentLocale === "en") {
            if (path.startsWith("/de")) {
                return path.slice(3);
            }
            else {
                return path;
            }
        }
        else {
            if (path.startsWith("/de")) {
                return path;
            }
            else {
                return "/de" + path;
            }
        }
    }
    if (locale == "en") {
        // home is an exception
        if (path == "/de") {
            return "/";
        }
        return path.slice(3);   // return path without locale prefix
    }
    else {
        return "/de" + path;    // add locale prefix
    }
}