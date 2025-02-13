import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

import { album, imageWrapper, container, title } from './styles'

import { createClient } from '@/prismicio'

const Albums: React.FC = async () => {
  const client = createClient()
  const res = await client.getAllByTag('album', {
    orderings: 'document.first_publication_date desc',
  })

  return (
    <div className={container}>
      {res.map(({ uid, data }) => (
        <Link href={`/albums/${uid}`} key={uid}>
          <div className={album}>
            <div className={imageWrapper}>
              <PrismicNextImage
                field={data.thumbnail}
                alt=""
                imgixParams={{ auto: [] }}
              />
            </div>
            <div className={title}>
              <mark>{data.title}</mark>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Albums
