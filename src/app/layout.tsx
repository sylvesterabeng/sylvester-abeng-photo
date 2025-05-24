import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { PrismicPreview } from '@prismicio/next'
import { Analytics } from '@vercel/analytics/react'

import { Header } from './components'
import { bellefair, zenOldMincho, container } from './styles'

import type { Metadata } from 'next'

import { repositoryName } from '@/prismicio'

import 'sanitize.css'

const title = 'Sylvester Abeng Photo'
const description = '「好き」と「楽しい」を集める'

export const metadata: Metadata = {
  applicationName: title,
  title: title,
  description: description,
  keywords: [
    'Sylvester Abeng',
    'photography',
    'portfolio',
    'japan photographer',
    '写真家',
  ],
  authors: [{ name: 'Sylvester Abeng' }],
  creator: 'Sylvester Abeng',
  publisher: 'Sylvester Abeng',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://sylvester-abeng-photo.vercel.app',
  },
  openGraph: {
    type: 'website',
    url: 'https://sylvester-abeng-photo.vercel.app',
    title: title,
    description: description,
    siteName: title,
    locale: 'ja_JP',
    images: [
      {
        url: 'https://sylvester-abeng-photo.vercel.app/ogp.png',
        alt: 'Sylvester Abeng Photo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [
      {
        url: 'https://sylvester-abeng-photo.vercel.app/ogp.png',
        alt: 'Sylvester Abeng Photo Portfolio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${bellefair.variable} ${zenOldMincho.variable} ${container}`}
    >
      <body>
        <KumaRegistry>
          <Header />
          {children}
        </KumaRegistry>
        <PrismicPreview repositoryName={repositoryName} />
        <Analytics />
      </body>
    </html>
  )
}
