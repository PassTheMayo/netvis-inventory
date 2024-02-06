import '@/styles/global.sass';

import { DM_Mono, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const interFont = Inter({
    variable: '--font-inter',
    display: 'swap',
    subsets: ['latin'],
    fallback: ['Arial', 'sans-serif']
});

const dmMonoFont = DM_Mono({
    variable: '--font-dm-mono',
    weight: ['300', '400', '500'],
    display: 'swap',
    subsets: ['latin'],
    fallback: ['Courier New', 'monospace']
});

export const metadata = {
    title: {
        default: 'A Website - My short description...',
        template: '%s - A Website'
    },
    description: 'Long description...',
    metadataBase: new URL('https://mcstatus.io'),
    openGraph: {
        title: 'A Website - My short description...',
        description: 'Long description...',
        url: '/',
        siteName: 'A Website',
        images: [
            {
                url: '/img/icon.png',
                width: 300,
                height: 300
            }
        ],
        locale: 'en-US',
        type: 'website'
    },
    robots: {
        index: true,
        follow: true
    },
    icons: {
        icon: [
            { url: '/img/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/img/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/img/android-chrome-36x36.png', sizes: '36x36', type: 'image/png' },
            { url: '/img/android-chrome-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/img/android-chrome-72x72.png', sizes: '72x72', type: 'image/png' },
            { url: '/img/android-chrome-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/img/android-chrome-144x144.png', sizes: '144x144', type: 'image/png' },
            { url: '/img/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/img/android-chrome-256x256.png', sizes: '256x256', type: 'image/png' },
            { url: '/img/android-chrome-384x384.png', sizes: '384x384', type: 'image/png' },
            { url: '/img/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/img/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
            { url: '/img/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
            { url: '/img/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
            { url: '/img/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
            { url: '/img/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
            { url: '/img/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
            { url: '/img/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
            { url: '/img/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
            { url: '/img/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
            { url: '/img/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-57x57-precomposed.png', sizes: '57x57' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-60x60-precomposed.png', sizes: '60x60' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-72x72-precomposed.png', sizes: '72x72' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-76x76-precomposed.png', sizes: '76x76' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-114x114-precomposed.png', sizes: '114x114' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-120x120-precomposed.png', sizes: '120x120' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-144x144-precomposed.png', sizes: '144x144' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-152x152-precomposed.png', sizes: '152x152' },
            { rel: 'apple-touch-icon-precomposed', url: '/img/apple-touch-icon-180x180-precomposed.png', sizes: '180x180' },
            { rel: 'mask-icon', url: '/img/safari-pinned-tab.svg', color: '#303030' }
        ]
    },
    manifest: '/site.webmanifest',
    alternates: {
        canonical: '/'
    }
};

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#E6E6E6' },
        { media: '(prefers-color-scheme: dark)', color: '#111111' }
    ]
};

export default function RootLayout({ children }) {
    return (
        <html className={`${interFont.variable} ${dmMonoFont.variable}`} lang="en">
            <body className="bg-neutral-100 text-black font-sans overflow-x-hidden">
                <Navbar />
                {children}
            </body>
        </html>
    );
}