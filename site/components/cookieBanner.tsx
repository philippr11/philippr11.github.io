'use client';
import { getCurrentLocale } from "@/lib/locale";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const buttonStyle = "bg-primary-light50 border-2 border-primary text-primary px-4 py-1 rounded hover:bg-primary hover:text-primary-light50"

export function consentSettings(consent: boolean | null) {
    if (consent === null) {
        localStorage.removeItem('cookie_consent');
        return;
    }
    if (consent) {
        localStorage.setItem('cookie_consent', 'granted');
        sendGTMEvent({ 'event': 'consent_granted' });
    }
    else {
        localStorage.setItem('cookie_consent', 'denied');
    }
}

export function CookieBanner() {
    const [consent, setConsent] = useState<null | undefined | boolean>(undefined);
    const currentRoute = usePathname();
    const currentLocale = getCurrentLocale(currentRoute);
    let texts = {
        'heading': "",
        'accept': "",
        'refuse': ""
    }
    switch(currentLocale) {
        case 'en':
            texts['heading'] = 'Is it ok if we use cookies to analyze our service and make it better in the future?';
            texts['accept'] = 'OK';
            texts['refuse'] = 'No, sorry';
            break;
        case 'de':
            texts['heading'] = 'Dürfen wir Cookies benutzen, um unseren Service zu analysieren und in der Zukunft zu verbessern?';
            texts['accept'] = 'Ja';
            texts['refuse'] = 'Nein, danke';
            break;
    }
    useEffect(() => {
        const storedConsent = localStorage.getItem('cookie_consent');
        if (storedConsent === 'granted') {
            setConsent(true);
            sendGTMEvent({ 'event': 'consent_granted' });
        }
        else if (storedConsent === 'denied') {
            setConsent(false);
        }
        else {
            setConsent(null);
        }
    }, []);
    if (consent === null) {
        return <div className="bg-black fixed z-[100] bg-opacity-75 w-screen h-screen grid dark:text-black">
            <div className="h-fit w-4/5 max-w-[32rem] bg-primary-light50 p-10 rounded mx-auto my-auto">
                <h3>{texts['heading']}</h3>
                <div className="flex justify-end w-full gap-2 mt-4">
                    <button className={buttonStyle} onClick={() => { consentSettings(true); setConsent(true); }}>{texts['accept']}</button>
                    <button className={buttonStyle} onClick={() => { consentSettings(false); setConsent(false); }}>{texts['refuse']}</button>
                </div>
            </div>
        </div>
    }
}