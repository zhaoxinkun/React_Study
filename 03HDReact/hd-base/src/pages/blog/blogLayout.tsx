import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link, Outlet } from '@tanstack/react-router'
import classNames from 'classnames'

export function BlogLayout() {
  return (
    <>
      <div className="bg-white border-primary border-t-4 shadow-sm mb-6">
        <div className="container m-auto h-16 flex items-center gap-6">
          <Link to="/" className="text-primary flex items-center gap-1">
            <span className="uppercase">houdunren.com</span>
          </Link>
          <Link to="/blog/front">我的博客</Link>
          <Link to="/blog/feature">React特性</Link>
          <Link to="/blog/live">晚八点直播</Link>
        </div>
      </div>
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
      <Outlet />
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
      <CardHeader>
        <h2> {title}</h2>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{view}</CardFooter>
    </Card>
  )
}
