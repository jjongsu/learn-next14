import '../styles/global.css';
import { Metadata } from 'next';
import Navigation from '../components/navigation';
import Script from 'next/script';

export const metadata: Metadata = {
    // title: 'Home | Next Movies',
    title: {
        template: '%s | Next Movies',
        default: 'Loading...',
    },
    description: 'The best movies on the best framework',
    verification: {
        google: 'T5bLhVUk64v3rAdyVRV0PdZJ6WZV9fWYwSqHN0HJIuE',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Script
                id='hotjar-javascript'
                dangerouslySetInnerHTML={{
                    __html: `(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:5111622,hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                }}
            />
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
