import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import classNames from 'classnames'
import { UserAvatar } from '@/components/Avatar.tsx'
import { ErrorCom } from '@/error/ErrorCom.tsx'
import { useArticle } from '@/hooks/useArticle.tsx'
import { FakerImage } from '@/components/FakerImage.tsx'

export function Front() {
  const { isLoading, error, data } = useArticle()
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
            {data?.map(item => {
              return (
                <HoudunrenPage
                  className="mb-3"
                  title={item.id}
                  content={item.content}
                  preview={item.preview}
                  key={item.id}
                ></HoudunrenPage>
              )
            })}
          </CardContent>
        </Card>
      </section>
    </>
  )
}

interface Props {
  id?: string
  title: string
  content: string
  preview: string
  className?: string
}

function HoudunrenPage({ className, title, content, preview }: Props) {
  return (
    // 计算classname
    <Card className={classNames(className, 'bg-amber-500')}>
      <CardHeader>
        <div className={classNames(className, 'flex items-center gap-4 border hover:bg-muted')}>
          {/*随机头像*/}
          <UserAvatar seed={title} />
          <h2> {title}</h2>
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="overflow-hidden">
        <FakerImage />
        {preview}
      </CardFooter>
    </Card>
  )
}
