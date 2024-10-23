import { HStack, VStack, css } from '@kuma-ui/core'

const container = css`
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0 64px;
  position: fixed;
  align-items: center;
  height: t('sizes.header');
  z-index: 1;
  background-color: t('colors.neutral.100');

  @media (width < t('breakpoints.lg')) {
    padding: 0 24px;
    height: t('sizes.headerMobile');
  }
`

const title = css`
  font-size: t('fontSizes.lg');
  line-height: 125%;

  @media (width < t('breakpoints.lg')) {
    font-size: t('fontSizes.md');
  }
`

const subtitle = css`
  font-family: var(--font-zen-old-mincho);
  font-weight: 900;
  font-size: t('fontSizes.sm');

  @media (width < t('breakpoints.lg')) {
    font-size: t('fontSizes.xs');
  }
`

const nav = css`
  font-size: t('fontSizes.md');
  gap: 24px;

  span {
    cursor: pointer;
  }

  @media (width < t('breakpoints.lg')) {
    font-size: t('fontSizes.rg');
  }
`

const Header: React.FC = () => {
  return (
    <HStack justify="space-between" className={container}>
      <VStack>
        <span className={title}>Sylvester Abeng</span>
        <span className={subtitle}>「好き」と「楽しい」を集める</span>
      </VStack>
      <HStack className={nav}>
        <span>About</span>
        <span>Album</span>
      </HStack>
    </HStack>
  )
}

export default Header
