import { useQuery } from '@tanstack/react-query'
import { getArticle } from '@/api/article.ts'
import type { Article } from '@/types/article.ts'
import type { AxiosError } from 'axios'

export function useArticles() {
  return useQuery<Article[], AxiosError>({
    queryKey: ['article'],
    queryFn: getArticle,
  })
}
