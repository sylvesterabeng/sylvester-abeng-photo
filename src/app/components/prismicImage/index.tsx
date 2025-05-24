import { PrismicNextImage, PrismicNextImageProps } from '@prismicio/next'
import type { ImageField } from '@prismicio/client'

interface PrismicImageProps {
  field: ImageField | null | undefined
  className?: string
  priority?: boolean
  imgixParams?: PrismicNextImageProps['imgixParams']
}

const PrismicImage: React.FC<PrismicImageProps> = ({
  field,
  className,
  priority = false,
  imgixParams = {
    auto: ['format', 'compress'],
    q: 80,
    cs: 'origin',
  },
}) => {
  return (
    <PrismicNextImage
      className={className}
      field={field}
      priority={priority}
      imgixParams={imgixParams}
      alt=""
    />
  )
}

export default PrismicImage
