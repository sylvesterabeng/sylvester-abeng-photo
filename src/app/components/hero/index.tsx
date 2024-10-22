'use client'
import { Box, css, Flex, HStack, VStack } from '@kuma-ui/core'
import { PrismicNextImage } from '@prismicio/next'
import { useEffect, useState } from 'react'

import type { GallerySlice } from '../../../../prismicio-types'
import type { SliceZone } from '@prismicio/client'

interface Props {
  pickups: SliceZone<GallerySlice>
}

const container = css`
  height: 100vh;
  width: 100%;
  padding: 40px 64px;
  padding-top: t('sizes.header');
  align-items: center;
`

const imageWrapper = css`
  @keyframes slide {
    0% {
      object-position: 30%;
      opacity: 0;
    }
    10% {
      object-position: 55%;
      opacity: 1;
    }
    100% {
      object-position: 70%;
      opacity: 0.9;
    }
  }

  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 300px;
    }
  }

  img {
    min-width: 300px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    animation: slide 7s infinite cubic-bezier(0.3, 0, 0.7, 1);

    &:only-child {
      border-radius: t('radii.rg');
    }
    &:first-child:not(:only-child) {
      border-radius: t('radii.rg') 0 0 t('radii.rg');
    }
    &:last-child:not(:only-child) {
      border-radius: 0 t('radii.rg') t('radii.rg') 0;
    }
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

const progress = css`
  background: t('colors.neutral.200');
  height: 3px;
  margin-top: 8px;
  width: 300px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    background: t('colors.neutral.300');
    height: 3px;
    width: 300px;
    animation: progress 6s infinite ease-in-out;
  }
`

const Hero: React.FC<Props> = ({ pickups }) => {
  const maxTimer = 5
  const [timer, setTimer] = useState(0)
  const [index, setIndex] = useState(0)
  const data = pickups[index].primary

  useEffect(() => {
    const setNextPickup = () => {
      setIndex(index === pickups.length - 1 ? 0 : index + 1)
    }

    if (timer > maxTimer) {
      setTimer(0)
      setNextPickup()
    }
    const intervalId = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [index, pickups, timer])

  return (
    <HStack className={container}>
      <Flex mr={40} gap={8} className={image}>
        {data.thumbnails?.map((items) => (
          <Box key={items.thumbnail.id} className={imageWrapper}>
            <PrismicNextImage field={items.thumbnail} />
          </Box>
        ))}
      </Flex>
      <VStack pt={80} pb={40} height="100%" justifyContent="space-between">
        <VStack mb={64} className={catchphrase}>
          <span>「好き」</span>
          <span>「楽しい」</span>
          <span className={number}>{data.number}</span>
        </VStack>
        <VStack className={meta}>
          <span>
            {data.number} - {data.title}
          </span>
          <Box className={progress}></Box>
        </VStack>
      </VStack>
    </HStack>
  )
}

export default Hero
