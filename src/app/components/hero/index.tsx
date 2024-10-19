import { Box, css, HStack, Image, VStack } from '@kuma-ui/core'

const image = css`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  border-radius: t('radii.sm');
`

const title = css`
  line-height: 1.15;
  font-size: t('fontSizes.heroLg');
  align-self: flex-end;
`

const Hero: React.FC = () => {
  return (
    <HStack p={64} pt="sizes.header" height="100vh" width="100%">
      <Box mr={64}>
        <Image
          className={image}
          src="https://sylvester-abeng.vercel.app/images/garden-house.png"
          alt="hero"
        />
      </Box>
      <VStack mb={64} mr={80} className={title}>
        <span>Sylvester</span>
        <span>Abeng</span>
      </VStack>
    </HStack>
  )
}

export default Hero
