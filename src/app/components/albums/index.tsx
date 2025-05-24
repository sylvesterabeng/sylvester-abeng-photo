import { Box, css, VStack } from '@kuma-ui/core'

import { createClient } from '@/prismicio'
import { PrismicImage } from '@/app/components'

const Albums: React.FC = async () => {
  const client = createClient()
  const res = await client.getByUID('albums', 'pickups')

  const album = css`
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `

  return (
    <VStack p={64} alignItems="center" gap={16}>
      {res.data.slices.map((d) => (
        <VStack key={d.id} className={album} alignItems="center">
          <p>{d.primary.title}</p>
          <Box width="100%">
            <PrismicImage field={d.primary.photos[0]?.photo} />
          </Box>
        </VStack>
      ))}
    </VStack>
  )
}

export default Albums
