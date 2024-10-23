'use client'
import { Box, css, Flex, VStack } from '@kuma-ui/core'
import { useEffect, useState } from 'react'

import type { GallerySlice } from '../../../../prismicio-types'
import type { SliceZone } from '@prismicio/client'

interface Props {
  pickups: SliceZone<GallerySlice>
}

const container = css`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 40px 64px;
  padding-top: t('sizes.header');
  align-items: center;
  flex-direction: row;
  overflow: hidden;

  @media (width < t('breakpoints.lg')) {
    flex-direction: column;
    padding: 24px;
    padding-top: t('sizes.headerMobile');
  }
`

const imageWrapper = css`
  flex: 1;

  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    background-size: auto 100%;
    overflow: hidden;
    background-size: cover;

    &:only-child {
      border-radius: t('radii.md');
    }
    &:first-child:not(:only-child) {
      border-radius: t('radii.md') 0 0 t('radii.md');
    }
    &:last-child:not(:only-child) {
      border-radius: 0 t('radii.md') t('radii.md') 0;
    }

    @media (width < t('breakpoints.lg')) {
      min-width: unset;
    }
  }
`

const singleSlide = css`
  min-width: 408px;
  @keyframes singleSlide {
    0% {
      transform: translateX(60px);
      background-position: 50%;
      opacity: 0;
    }
    20% {
      transform: translateX(0);
      background-position: 45%;
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      background-position: 60%;
      opacity: 1;
    }
  }

  @keyframes singleSlideMobile {
    0% {
      transform: translateX(20px);
      background-position: 40%;
      opacity: 0;
    }
    20% {
      transform: translateX(0);
      background-position: 35%;
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      background-position: 60%;
      opacity: 1;
    }
  }

  animation: singleSlide 7s cubic-bezier(0.3, 0, 0.7, 1);

  @media (width < t('breakpoints.lg')) {
    animation: singleSlideMobile 7s cubic-bezier(0.3, 0, 0.7, 1);
  }
`

const dualSlide = css`
  min-width: 200px;

  @keyframes dualSlide {
    0% {
      transform: translateX(60px);
      background-position: 55%;
      opacity: 0;
    }
    20% {
      transform: translateX(0);
      background-position: 50%;
      opacity: 1;
    }
    60%,
    100% {
      transform: translateX(0);
      background-position: 60%;
      opacity: 1;
    }
  }

  @keyframes dualSlideMobile {
    0% {
      transform: translateX(20px);
      background-position: 55%;
      opacity: 0;
    }
    20% {
      transform: translateX(0);
      background-position: 50%;
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      background-position: 60%;
      opacity: 1;
    }
  }

  &:first-child {
    animation: dualSlide 7s cubic-bezier(0.3, 0, 0.7, 1);

    @media (width < t('breakpoints.lg')) {
      animation: dualSlide 7s cubic-bezier(0.3, 0, 0.7, 1);
    }
  }
  &:last-child {
    animation: dualSlideMobile 7s cubic-bezier(0.3, 0, 0.7, 1);

    @media (width < t('breakpoints.lg')) {
      animation: dualSlideMobile 7s cubic-bezier(0.3, 0, 0.7, 1);
    }
  }
`

const slide = css`
  height: 100%;
  width: 100%;
  margin-right: 40px;
  gap: 8px;
  flex: unset;
  flex: 4;

  @media (width < t('breakpoints.lg')) {
    margin-right: 0;
  }
`

const textWrapper = css`
  height: -webkit-fill-available;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 80px;
  justify-content: space-between;
  flex: unset;
  flex: 1;

  @media (width < t('breakpoints.lg')) {
    padding-bottom: 0;
    padding-top: 20px;
    justify-content: unset;
  }
`

const catchphrase = css`
  min-width: 500px;
  width: 500px;
  line-height: 120%;
  font-size: t('fontSizes.heroLg');
  font-family: var(--font-zen-old-mincho);
  margin-bottom: 64px;
  font-weight: 900px;

  @media (width < t('breakpoints.lg')) {
    min-width: 100%;
    width: 100%;
    font-size: t('fontSizes.xxl');
    margin-bottom: 24px;
  }
`

const number = css`
  @keyframes numberSlide {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  font-size: t('fontSizes.xxxl');
  padding-left: 60px;
  font-family: var(--font-bellefair);
  animation: numberSlide 1s cubic-bezier(0.3, 0, 0.7, 1);

  @media (width < t('breakpoints.lg')) {
    padding-left: 20px;
    font-size: t('fontSizes.lg');
  }
`

const meta = css`
  @keyframes metaSlide {
    0% {
      transform: translateY(8px);
      opacity: 0;
    }
    10% {
      transform: translateY(0px);
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  line-height: 130%;
  font-size: t('fontSizes.md');
  padding-left: 60px;
  animation: metaSlide 7s cubic-bezier(0.3, 0, 0.7, 1);

  @media (width < t('breakpoints.lg')) {
    padding-left: 20px;
    font-size: t('fontSizes.sm');
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
    <Flex className={container}>
      <Flex className={slide}>
        {data.thumbnails?.map((items) => (
          <Box key={items.thumbnail.id} className={imageWrapper}>
            {data.thumbnails.length > 1 ? (
              <Box
                backgroundImage={`url('${items.thumbnail.url}')`}
                className={dualSlide}
              />
            ) : (
              <Box
                backgroundImage={`url('${items.thumbnail.url}')`}
                className={singleSlide}
              />
            )}
          </Box>
        ))}
      </Flex>
      <VStack className={textWrapper}>
        <VStack className={catchphrase}>
          <span>「好き」</span>
          <span>「楽しい」</span>
          <span className={number} key={data.number}>
            {data.number}
          </span>
        </VStack>
        <VStack className={meta} key={data.number}>
          <span>
            {data.number} - {data.title}
          </span>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default Hero
