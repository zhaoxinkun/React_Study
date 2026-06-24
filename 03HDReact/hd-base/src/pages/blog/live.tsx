import { UserAvatar } from '@/components/Avatar.tsx'
import { FakerImage } from '@/components/FakerImage.tsx'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx'
import { ErrorCom } from '@/error/ErrorCom.tsx'
import { useGetArticleList } from '@/services/article.tsx'
import { useDeleteArticle } from '@/services/article.tsx'
import type { Article } from '@/types/article.ts'
import { Link } from '@tanstack/react-router'
import { message } from 'antd'

export function Live() {
  // 获取文章列表
  const { isLoading, error, data } = useGetArticleList()
  if (isLoading) return 'loading...'
  if (error) return <ErrorCom error={error} />
  return (
    <>
      <section className="container m-auto">
        <Card>
          <CardHeader>
            <CardTitle>我的博客</CardTitle>
            <CardDescription>希望我的博客可以给你带来启发</CardDescription>
          </CardHeader>
          <CardContent>
            {data?.map(article => {
              return (
                <Card className="flex  gap-4 border mb-4" key={article.id}>
                  <CardHeader className="flex items-center justify-between gap-4 border h-15 hover:bg-amber-500">
                    <Link
                      // 跳转id的详情页
                      to="/blog/article/$id"
                      params={{
                        id: article.id,
                      }}
                      key={article.id}
                    >
                      <div className="flex items-center overflow-hidden">
                        <UserAvatar seed={article.title} className="size-15" />
                        {article.title}
                      </div>
                    </Link>
                    <div>
                      {/*删除组件*/}
                      <DelArticleButton article={article} />
                      {/*编辑组件*/}
                      <Link to="/blog/editArticle/$id" params={{ id: article.id }}>
                        <Button>Edit</Button>
                      </Link>
                    </div>
                  </CardHeader>

                  <CardDescription>{article.content}</CardDescription>
                  <CardFooter>
                    <FakerImage />
                  </CardFooter>
                </Card>
              )
            })}
          </CardContent>
        </Card>
      </section>
    </>
  )
}

interface Props {
  article: Article
}

function DelArticleButton({ article }: Props) {
  const delMutation = useDeleteArticle()
  const delArticle = () => {
    delMutation.mutate(article.id, {
      onSuccess: () => {
        message.info({
          content: '删除成功',
          key: 'info',
        })
      },
    })
  }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="basis-32" disabled={!delMutation.isIdle}>
            {!delMutation.isIdle && <span>删除中...</span>}
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={delArticle}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
