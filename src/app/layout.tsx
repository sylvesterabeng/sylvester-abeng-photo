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
  keywords: 'sylvester abeng',
  openGraph: {
    type: 'website',
    url: 'https://sylvester-abeng-photo.vercel.app',
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: 'https://sylvester-abeng-photo.vercel.app/ogp.png',
      },
    ],
  },
  twitter: {
    site: 'https://sylvester-abeng-photo.vercel.app',
    title: title,
    description: description,
    images: [
      {
        url: 'https://sylvester-abeng-photo.vercel.app/ogp.png',
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
