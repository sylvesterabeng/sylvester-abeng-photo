import Link from 'next/link'

import { album, image, container, title } from './styles'

import { createClient } from '@/prismicio'
import { PrismicImage } from '../components'

const Albums: React.FC = async () => {
  const client = createClient()
  const res = await client.getAllByTag('album', {
    orderings: [
      {
        field: 'document.first_publication_date',
        direction: 'desc',
      },
    ],
  })

  return (
    <div className={container}>
      {res.map(({ uid, data }) => (
        <Link href={`/albums/${uid}`} key={uid}>
          <div className={album}>
            <PrismicImage className={image} field={data.thumbnail} />
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
