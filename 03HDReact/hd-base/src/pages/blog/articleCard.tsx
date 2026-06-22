//文档内容卡片
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils.ts'
import { UserAvatar } from '@/components/Avatar.tsx'
import { FakerImage } from '@/components/FakerImage.tsx'
import type { Article } from '@/types/article.ts'
interface Props {
  article: Article
  className?: string
}

export default function ArticleCard({ className, article }: Props) {
  return (
    // 计算classname
    <Card className={cn(className, 'bg-amber-500')}>
      <CardHeader>
        <div className={cn(className, 'flex items-center gap-4 border hover:bg-muted')}>
          {/*随机头像*/}
          <UserAvatar seed={article.title} />
          <h2> {article.title}</h2>
        </div>
      </CardHeader>
      <CardContent>
        {article.content}
        {/*随机图片*/}
        <FakerImage />
      </CardContent>
      <CardFooter className="overflow-hidden flex flex-col gap-2">{article.preview}</CardFooter>
    </Card>
  )
}
