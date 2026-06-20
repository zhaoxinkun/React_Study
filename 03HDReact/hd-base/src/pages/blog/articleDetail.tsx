/***
 * @desc 这里是详情页,拿到params id之后,使用query查询数据即可
 *
 */
import { articleDetailRoute } from '@/routes/blog/blog.tsx'

export default function articleDetail() {
  const { id } = articleDetailRoute.useParams()
  return <h1>hello{id}</h1>
}
