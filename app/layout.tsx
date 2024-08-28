import '../styles/global.css';
import { Metadata } from 'next';
import Navigation from '../components/navigation';

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
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
