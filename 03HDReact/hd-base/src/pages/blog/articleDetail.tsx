/***
 * @desc 这里是详情页,拿到params id之后,使用query查询数据即可
 *
 */
import { articleDetailRoute } from '@/routes/blog/blog.tsx'
import { useGetArticleDetail } from '@/hooks/useGetArticleDetail.tsx'
import { Loading } from '@/components/loading.tsx'
import { ErrorCom } from '@/error/ErrorCom'

export default function ArticleDetail() {
  const { id } = articleDetailRoute.useParams()

  const { data, isLoading, error } = useGetArticleDetail(id)

  if (isLoading) return <Loading />
  if (error) return <ErrorCom error={error} />

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.content}</p>
      <p>{data?.preview}</p>
    </>
  )
}
