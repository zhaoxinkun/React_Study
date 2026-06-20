/***
 * @desc 这里是详情页,拿到params id之后,使用query查询数据即可
 *
 */
import { articleDetailRoute } from '@/routes/blog/blog.tsx'
import { useGetArticleDetail } from '@/hooks/useGetArticleDetail.tsx'

export default function ArticleDetail() {
  const { id } = articleDetailRoute.useParams()

  const { data, isLoading, error } = useGetArticleDetail(id)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.content}</p>
      <p>{data?.preview}</p>
    </>
  )
}
