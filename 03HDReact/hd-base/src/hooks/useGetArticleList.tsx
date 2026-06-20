import { useQuery } from '@tanstack/react-query'
import { getArticleList } from '@/api/article.ts'
import type { Article } from '@/types/article.ts'
import type { AxiosError } from 'axios'

export function useGetArticleList() {
  return useQuery<Article[], AxiosError>({
    queryKey: ['articleList'],
    queryFn: getArticleList,
  })
}
