import { PrismicNextImage, PrismicNextImageProps } from '@prismicio/next'
import type { ImageField } from '@prismicio/client'
import { css } from '@kuma-ui/core'

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
    q: 75,
    cs: 'origin',
  },
}) => {
  const wrapper = css`
    background-color: t('colors.neutral.150');

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `

  return (
    <div className={`${wrapper} ${className}`}>
      <PrismicNextImage
        field={field}
        priority={priority}
        imgixParams={imgixParams}
        alt=""
      />
    </div>
  )
}

export default PrismicImage
