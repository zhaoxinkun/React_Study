/***
 * @desc 博客的首页,渲染所有的文档
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useGetArticleList } from '@/services/article.tsx'
import { ErrorCom } from '@/error/ErrorCom.tsx'
import ArticleCard from '@/pages/blog/articleCard.tsx'
import { Link } from '@tanstack/react-router'

export default function BlogHome() {
  // 获取文章列表
  const { isLoading, error, data } = useGetArticleList()
  if (isLoading) return 'loading...'
  if (error) return <ErrorCom error={error} />
  return (
    <section className="container m-auto">
      <Card>
        <CardHeader className="flex justify-between align-items-center">
          <div>
            <CardTitle>我的博客</CardTitle>
            <CardDescription>希望我的博客可以给你带来启发</CardDescription>
          </div>
          <>
            <Link to="/blog/createArticle">
              <Button>Create</Button>
            </Link>
          </>
        </CardHeader>
        <CardContent>
          {data?.map(article => {
            return (
              <Link
                // 跳转id的详情页
                to="/blog/article/$id"
                params={{
                  id: article.id,
                }}
                key={article.id}
              >
                <ArticleCard article={article} />
              </Link>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
