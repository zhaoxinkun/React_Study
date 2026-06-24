import { useParams } from '@tanstack/react-router'
import { ArticleForm } from './articleForm'

export function EditArticlePage() {
  const { id } = useParams({
    from: '/blog/editArticle/$id',
  })
  return <ArticleForm articleId={id}></ArticleForm>
}
