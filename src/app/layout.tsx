import { css } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { PrismicPreview } from '@prismicio/next'
import { Bellefair, Zen_Old_Mincho } from 'next/font/google'

import { repositoryName } from '@/prismicio'

import type { Metadata } from 'next'

import 'sanitize.css'

export const metadata: Metadata = {
  title: 'Sylvester Abeng',
}

const bellefair = Bellefair({
  variable: '--font-bellefair',
  weight: ['400'],
  subsets: ['latin'],
})

const zenOldMincho = Zen_Old_Mincho({
  variable: '--font-zen-old-mincho',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const container = css`
  color: t('colors.neutral.500');
  background: t('colors.neutral.100');

  ::-moz-selection {
    background: t('colors.neutral.200');
  }

  ::selection {
    background: t('colors.neutral.200');
  }

  font-family: var(--font-bellefair);
`

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
        <KumaRegistry>{children}</KumaRegistry>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
