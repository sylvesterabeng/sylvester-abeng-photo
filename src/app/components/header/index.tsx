import { HStack, VStack, css } from '@kuma-ui/core'

const container = css`
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 64px;
  position: fixed;
  align-items: center;
  height: t('sizes.header');
`

const title = css`
  font-size: t('fontSizes.xl');
`

const subtitle = css`
  font-family: var(--font-zen-old-mincho);
  font-weight: 700;
  font-size: t('fontSizes.sm');
`

const nav = css`
  font-size: t('fontSizes.md');
  gap: 24px;
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
