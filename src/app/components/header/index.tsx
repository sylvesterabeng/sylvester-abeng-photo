import { HStack, VStack, css } from '@kuma-ui/core'
import Link from 'next/link'

const container = css`
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 64px;
  position: sticky;
  align-items: center;
  height: t('sizes.header');
  z-index: 1;
  background-color: t('colors.neutral.100');
  user-select: none;

  a {
    color: t('colors.neutral.500');
    text-decoration: none;
    outline: none;
  }

  @media (max-width: t('breakpoints.lg')) {
    padding: 0 24px;
    height: t('sizes.headerMobile');
  }
`

const title = css`
  font-size: t('fontSizes.lg');
  line-height: 125%;

  @media (max-width: t('breakpoints.lg')) {
    font-size: t('fontSizes.md');
  }
`

const subtitle = css`
  font-family: var(--font-zen-old-mincho);
  font-weight: 900;
  font-size: t('fontSizes.sm');

  span {
    background-color: t('colors.neutral.400');
    color: t('colors.neutral.100');
    padding: 1px 2px;
  }

  @media (max-width: t('breakpoints.lg')) {
    font-size: t('fontSizes.xs');
  }
`

const nav = css`
  font-size: t('fontSizes.md');
  gap: 24px;

  a:hover {
    color: t('colors.neutral.300');
  }

  @media (max-width: t('breakpoints.lg')) {
    font-size: t('fontSizes.rg');
  }
`

const Header: React.FC = () => {
  return (
    <HStack justify="space-between" className={container}>
      <VStack gap={2}>
        <Link href="/">
          <div className={title}>Sylvester Abeng</div>
          <div className={subtitle}>
            <span>好き</span>と<span>楽しい</span>を集める
          </div>
        </Link>
      </VStack>
      <HStack className={nav}>
        <Link href="/about">About</Link>
        <Link href="/albums">Albums</Link>
      </HStack>
    </HStack>
  )
}

export default Header
