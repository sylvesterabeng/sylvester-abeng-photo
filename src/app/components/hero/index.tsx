import { Box, css, Flex, HStack, VStack } from '@kuma-ui/core'
import { PrismicNextImage } from '@prismicio/next'

import { createClient } from '@/prismicio'

const container = css`
  height: 100vh;
  width: 100%;
  padding: 40px 64px;
  padding-top: t('sizes.header');
  align-items: center;
`

const imageWrapper = css`
  flex: 1;

  img {
    min-width: 300px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }

  &:only-child {
    border-radius: t('radii.rg');
  }
  &:first-child:not(:only-child) img {
    border-radius: t('radii.rg') 0 0 t('radii.rg');
  }
  &:last-child:not(:only-child) img {
    border-radius: 0 t('radii.rg') t('radii.rg') 0;
  }
`

const image = css`
  height: 100%;
  width: 100%;
`

const catchphrase = css`
  min-width: 500px;
  line-height: 130%;
  font-size: t('fontSizes.heroLg');
  align-self: flex-end;
  font-family: var(--font-zen-old-mincho);
`

const number = css`
  min-width: 500px;
  line-height: 130%;
  font-size: t('fontSizes.xxxl');
  align-self: flex-end;
  padding-left: 60px;
`

const meta = css`
  min-width: 500px;
  line-height: 130%;
  font-size: t('fontSizes.md');
  padding-left: 60px;
`

const Hero: React.FC = async () => {
  const client = createClient()
  const res = await client.getSingle('galleries')
  const data = res.data.slices[1]

  return (
    <HStack className={container}>
      <Flex mr={40} gap={8} className={image}>
        {data?.primary.thumbnails?.map((items) => (
          <Box key={items.thumbnail.id} className={imageWrapper}>
            <PrismicNextImage field={items.thumbnail} />
          </Box>
        ))}
      </Flex>
      <VStack pt={80} pb={40} height="100%" justifyContent="space-between">
        <VStack mb={64} className={catchphrase}>
          <span>「好き」</span>
          <span>「楽しい」</span>
          <span className={number}>{data?.primary.number}</span>
        </VStack>
        <VStack>
          <span className={meta}>
            {data?.primary.number} - {data?.primary.title}
          </span>
        </VStack>
      </VStack>
    </HStack>
  )
}

export default Hero
