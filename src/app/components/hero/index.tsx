'use client'
import { Box, Flex, VStack } from '@kuma-ui/core'
import Link from 'next/link'
import { Fragment, useCallback, useEffect, useState } from 'react'

import {
  container,
  slide,
  dualSlide,
  singleSlide,
  textWrapper,
  name,
  meta,
} from './styles'

import type { GallerySlice } from '../../../../prismicio-types'
import type { SliceZone } from '@prismicio/client'

interface Props {
  pickups: SliceZone<GallerySlice>
}

const Hero: React.FC<Props> = ({ pickups }) => {
  const maxTimer = 5
  const [timer, setTimer] = useState(0)
  const [index, setIndex] = useState(0)
  const data = pickups[index].primary

  const setNextPickup = useCallback(() => {
    setIndex(index === pickups.length - 1 ? 0 : index + 1)
  }, [index, pickups.length])

  useEffect(() => {
    if (timer > maxTimer) {
      setTimer(0)
      setNextPickup()
    }
    const intervalId = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [index, pickups, setNextPickup, timer])

  return (
    <Flex className={container}>
      <Link href={`/albums/${data.slug}`}>
        <Flex className={slide} key={index}>
          {data.photos?.map((items) => (
            <Fragment key={items.photo.id}>
              {data.photos.length > 1 ? (
                <Box
                  backgroundImage={`url('${items.photo.url}')`}
                  className={dualSlide}
                />
              ) : (
                <Box
                  backgroundImage={`url('${items.photo.url}')`}
                  className={singleSlide}
                />
              )}
            </Fragment>
          ))}
        </Flex>
      </Link>
      <VStack className={textWrapper}>
        <VStack className={name}>
          <span>Sylvester Abeng</span>
        </VStack>
        <VStack className={meta} key={data.number}>
          <span>
            {data.number} {data.title}
          </span>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default Hero
