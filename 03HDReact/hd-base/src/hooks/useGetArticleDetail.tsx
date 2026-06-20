import { useQuery } from '@tanstack/react-query'
import { getArticleDetail } from '@/api/article.ts'
import type { Article } from '@/types/article.ts'
import type { AxiosError } from 'axios'

export function useGetArticleDetail(id: string) {
  return useQuery<Article, AxiosError>({
    queryKey: ['articleDetail', id],
    queryFn: () => getArticleDetail(id),
  })
}
