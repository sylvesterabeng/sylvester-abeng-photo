import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { PrismicPreview } from '@prismicio/next'

import { Header } from './components'
import { bellefair, zenOldMincho, container } from './styles'

import type { Metadata } from 'next'

import { repositoryName } from '@/prismicio'

import 'sanitize.css'

export const metadata: Metadata = {
  title: 'Sylvester Abeng Photo',
  description: '好きと楽しいを集める',
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
      </body>
    </html>
  )
}
