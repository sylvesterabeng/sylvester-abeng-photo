import { HStack, css } from '@kuma-ui/core'

const container = css`
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 64px;
  position: fixed;
  align-items: center;
  height: t('sizes.header');
  font-size: t('fontSizes.lg');
`

const Header: React.FC = () => {
  return (
    <HStack justify="space-between" className={container}>
      <div>Sy</div>
      <div>Menu</div>
    </HStack>
  )
}

export default Header
