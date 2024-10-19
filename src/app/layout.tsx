import { css } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Bellefair } from 'next/font/google'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sylvester Abeng',
}

const bellefair = Bellefair({ weight: ['400'], subsets: ['latin'] })

const container = css`
  color: t('colors.neutral.500');
  background: t('colors.neutral.100');

  ::-moz-selection {
    background: t('colors.neutral.200');
  }

  ::selection {
    background: t('colors.neutral.200');
  }
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={container}>
      <body className={bellefair.className}>
        <KumaRegistry>{children}</KumaRegistry>
      </body>
    </html>
  )
}
