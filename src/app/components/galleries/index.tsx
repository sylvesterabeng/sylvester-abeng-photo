import { VStack } from '@kuma-ui/core'
import { PrismicNextImage } from '@prismicio/next'

import { createClient } from '@/prismicio'

const Galleries: React.FC = async () => {
  const client = createClient()
  const res = await client.getSingle('single')

  return (
    <VStack p={64} alignItems="center" gap={16}>
      {res.data.slices.map((d) => (
        <div key={d.id}>
          <p>{d.primary.title}</p>
          <PrismicNextImage field={d.primary.thumbnail} />
        </div>
      ))}
    </VStack>
  )
}

export default Galleries
