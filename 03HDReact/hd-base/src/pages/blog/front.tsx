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

export function Front() {
  return (
    <>
      <section className="container m-auto">
        <Card>
          <CardHeader>
            <CardTitle>Small Card</CardTitle>
            <CardDescription>This card uses the small size variant.</CardDescription>
          </CardHeader>
          <CardContent>
            {Array(10)
              .fill(null)
              .map((_, i) => {
                return (
                  <HoudunrenPage
                    className="mb-3"
                    title="后盾人"
                    content="晚上直播"
                    view={100}
                    key={i}
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
  title: string
  content: string
  view: number
  className?: string
}

function HoudunrenPage({ className, title, content, view }: Props) {
  return (
    // 计算classname
    <Card className={classNames(className, 'bg-amber-500')}>
      <UserAvatar seed={title} />
      <CardHeader>
        <h2> {title}</h2>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{view}</CardFooter>
    </Card>
  )
}
