import Script from "next/script";
import FloatingContact from "@/components/FloatingContact";
import LanguageModal from "@/components/LanguageModal";
import GoogleTranslate from "@/components/GoogleTranslate";
import { LanguageProvider } from "@/context/LanguageContext";

/**
 * Everything that used to live directly inside <body> in the single shared
 * root layout — third-party scripts, the language provider, and the
 * floating/modal chrome. Factored out so the two root layouts ((site) for
 * English, it/ for Italian — see each layout.tsx for why there are two)
 * don't duplicate this markup, only the <html lang> that differs between them.
 */
export default function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Microsoft Clarity */}
      <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vx8bmsmlxa");
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2H2JG3HNHV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2H2JG3HNHV');
        `}
      </Script>

      {/* TrustBox script */}
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />

      <LanguageProvider>
        {children}
        <FloatingContact />
        <LanguageModal />
        <GoogleTranslate />
      </LanguageProvider>
    </>
  );
}
