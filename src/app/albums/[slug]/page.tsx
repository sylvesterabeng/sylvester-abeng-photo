import { PrismicNextImage } from '@prismicio/next'
import { notFound } from 'next/navigation'

import {
  container,
  horizontalPhoto,
  photos,
  title,
  verticalPhoto,
} from './styles'

import { createClient } from '@/prismicio'

interface Props {
  params: Promise<{ slug: string }>
}

const Album: React.FC<Props> = async ({ params }) => {
  const slug = (await params).slug
  const client = createClient()
  let data

  try {
    data = (await client.getByUID('albums', slug)).data
  } catch {
    notFound()
  }

  return (
    <div className={container}>
      <div className={title}>{data?.title}</div>
      <div className={photos}>
        {data?.photos.map(({ photo }) => {
          const dimension = photo?.dimensions
          if (!dimension) {
            return null
          }
          const isVertical = dimension.height > dimension.width

          return (
            <PrismicNextImage
              className={isVertical ? verticalPhoto : horizontalPhoto}
              field={photo}
              key={photo.url}
              alt=""
              imgixParams={{ auto: [] }}
            />
          )
        })}
      </div>
    </div>
  )
}

export const generateStaticParams = async () => {
  const client = createClient()
  const documents = await client.getAllByType('albums')

  return documents.map((doc) => ({
    slug: doc.uid,
  }))
}

export default Album
