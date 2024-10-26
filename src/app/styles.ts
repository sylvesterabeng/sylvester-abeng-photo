import { css } from '@kuma-ui/core'
import { Bellefair, Zen_Old_Mincho } from 'next/font/google'

export const bellefair = Bellefair({
  variable: '--font-bellefair',
  weight: ['400'],
  subsets: ['latin'],
})

export const zenOldMincho = Zen_Old_Mincho({
  variable: '--font-zen-old-mincho',
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const container = css`
  color: t('colors.neutral.500');
  background: t('colors.neutral.100');
  font-family: var(--font-bellefair);

  ::-moz-selection {
    background: t('colors.neutral.200');
  }

  ::selection {
    background: t('colors.neutral.200');
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: t('colors.neutral.100');
  }

  body::-webkit-scrollbar-thumb {
    background-color: t('colors.neutral.200');
    border-radius: 50px;
  }
`
