'use client'
import { Box, Flex, VStack } from '@kuma-ui/core'
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
      <Flex className={slide} key={index}>
        {data.thumbnails?.map((items) => (
          <Fragment key={items.thumbnail.id}>
            {data.thumbnails.length > 1 ? (
              <Box
                onClick={setNextPickup}
                backgroundImage={`url('${items.thumbnail.url}')`}
                className={dualSlide}
              />
            ) : (
              <Box
                onClick={setNextPickup}
                backgroundImage={`url('${items.thumbnail.url}')`}
                className={singleSlide}
              />
            )}
          </Fragment>
        ))}
      </Flex>
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
