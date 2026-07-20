'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        Trustpilot?: { loadFromElement: (el: Element, force?: boolean) => void };
    }
}

// TrustBox widget - Review Collector. The bootstrap script (loaded once in
// the root layout) scans the page for `.trustpilot-widget` elements on load;
// since this component can also mount after that scan (client-side
// navigation), we re-trigger it manually once the element is in the DOM.
export default function TrustpilotWidget() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current && window.Trustpilot) {
            window.Trustpilot.loadFromElement(ref.current, true);
        }
    }, []);

    return (
        <div
            ref={ref}
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6a5e069b5e198d388b3b2acb"
            data-style-height="52px"
            data-style-width="100%"
            data-token="a0046954-5442-4cf4-adb5-98826a96dd6a"
        >
            <a href="https://www.trustpilot.com/review/italytaxiservice.com" target="_blank" rel="noopener noreferrer">
                Trustpilot
            </a>
        </div>
    );
}
