import { faker } from '@faker-js/faker'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// 使用faker 来mock一个图片,并使用懒加载
export function FakerImage() {
  return (
    <LazyLoadImage
      src={faker.image.url({
        height: 100,
      })}
    />
  )
}
