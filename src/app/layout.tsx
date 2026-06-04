import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'AdsGuruAI - AI-Powered Google Ads Management for India',
  description: 'Ads mein AI ka jadoo, Leads par aapka kaaboo. Paisa bacha, ROI badha with AI-powered Google Ads management in your language.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0F172A]">
      <head>
          <meta name="google-site-verification" content="mb5Nl5vAu87Zb2b59PXHLDUYK7a-geowS-3PSYUjMqU" />
        </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0F172A] text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
