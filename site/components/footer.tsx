import navigation from '@/config/navigation.json';
import { getCurrentLocale, getLinkToLocale } from '@/lib/locale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { consentSettings } from '@/components/cookieBanner';

/**
 * Selects the correct language from the given object
 * @param itemName 
 * @param currentLocale 
 * @returns 
 */
function getNameInCurrentLocale(itemName: { en: string, de: string }, currentLocale: string) {
    const locale = currentLocale ?? "en";
    return itemName[locale as keyof typeof itemName];
}

/**
 * Reset cookie consent in localStorage and reload page
 */
function resetCookieConsent() {
    consentSettings(null);
    window.location.reload();
}

export function Footer() {
    const currentRoute = usePathname();
    return <>
    <div className="mt-10 py-6 px-5 lg:px-52 w-full bg-footer-bg text-footer-text grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* legal links */}
        <div className="grid-cols-subgrid gap-3">
            {navigation.footer.legal.map((item : { name: { en: string, de: string }, url: string }) => <div key={item.name.de}><Link className="underline" href={item.url}>{item.name.de}</Link></div>)}
            <div className="underline cursor-pointer" onClick={resetCookieConsent}>Cookie Einstellungen</div>
        </div>
        { /* something else in the future */ }
        <div className="grid-cols-subgrid">
        </div>
        { /* something else in the future */ }
        <div className="grid-cols-subgrid">
        </div>
    </div>
    </>
}