import { useForm } from '@tanstack/react-form'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UserAvatar } from '@/components/Avatar.tsx'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils.ts'
import { useAddArticle, useGetArticleDetail, useUpdateArticle } from '@/services/article.tsx'
import { ValidatorsError } from '@/components/validatorsError.tsx'
import { useEffect } from 'react'

export function ArticleForm({ articleId }: { articleId?: string }) {
  const articleQuery = useGetArticleDetail(String(articleId ?? ''))
  const addMutation = useAddArticle()
  const updateMutation = useUpdateArticle()

  const form = useForm({
    defaultValues: {
      title: '',
      content: '',
      preview: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      if (articleId) {
        updateMutation.mutate({
          id: articleId!,
          data: value,
        })
      } else {
        addMutation.mutate(value)
      }
      // Mutation.mutate(value as CreateArticleDto)
    },
  })

  useEffect(() => {
    if (!articleQuery.data) return

    form.reset({
      title: articleQuery.data.title,

      content: articleQuery.data.content,

      preview: articleQuery.data.preview,
    })
  }, [articleQuery.data])

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>{articleId ? '编辑文章' : '创建文章'}</CardTitle>
            <CardDescription>请添加正能量的内容</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start border [&_input]:border">
            <form.Field
              name="title"
              validators={{
                onChange: ({ value }) => {
                  if (value.length < 5) {
                    return 'is not be ok'
                  }
                  return undefined
                },
              }}
              children={field => {
                return (
                  <>
                    <label htmlFor="title">Title :</label>
                    <input
                      name="title"
                      value={field.state.value ?? ''}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                    />
                    <ValidatorsError errors={field.state.meta.errors} />
                  </>
                )
              }}
            />
            <form.Field
              name="content"
              children={field => {
                return (
                  <>
                    <label aria-label="content">Content :</label>
                    <Textarea
                      aria-label="content"
                      value={field.state.value ?? ''}
                      onChange={e => field.handleChange(e.target.value)}
                    />
                  </>
                )
              }}
            />
            <form.Field
              name="preview"
              children={field => {
                return (
                  <>
                    <label htmlFor="preview">Preview :</label>
                    <div className="flex gap-3">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const avatar = `user_${i}`
                        return (
                          <UserAvatar
                            seed={avatar}
                            key={i}
                            className={cn(
                              'rounded-sm cursor-pointer hover:scale-125 border decoration-200 size-16',
                              field.state.value === avatar && 'ring-2 ring-blue-500',
                            )}
                            handle={() => {
                              field.handleChange(avatar)
                            }}
                          />
                        )
                      })}
                    </div>
                  </>
                )
              }}
            />
          </CardContent>
          <CardFooter>
            <Button>保存提交</Button>
          </CardFooter>
        </Card>
      </form>
    </>
  )
}
