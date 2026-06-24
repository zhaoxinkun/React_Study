import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createArticle,
  deleteArticle,
  getArticleDetail,
  getArticleList,
  updateArticle,
} from '@/api/article.ts'
import type { Article, CreateArticleDto, UpdateArticleDto } from '@/types/article.ts'
import { useNavigate } from '@tanstack/react-router'
import type { AxiosError } from 'axios'

// 获取文章数据
export function useGetArticleList() {
  return useQuery<Article[], AxiosError>({
    queryKey: ['articleList'],
    queryFn: getArticleList,
  })
}

// 获取文章详情
export const useGetArticleDetail = (id: string) => {
  return useQuery<Article, AxiosError>({
    queryKey: ['articleDetail', id],
    queryFn: () => getArticleDetail(id),
  })
}

// 删除文章数据
export const useDeleteArticle = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteArticle(id),
    onSuccess: result => {
      console.log('success', result)
      // 使以前获取的数据失效
      queryClient.invalidateQueries({
        queryKey: ['article'],
      })
    },
  })
}

// 编辑文章数据
export const useUpdateArticle = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateArticleDto }) => updateArticle(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['article'],
      })
      navigate({
        to: '/blog',
      })
    },
  })
}

// 添加文章数据
export const useAddArticle = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: CreateArticleDto) => createArticle(data),
    onSuccess: result => {
      console.log('success', result)
      // 使以前获取的数据失效
      queryClient.invalidateQueries({
        queryKey: ['article'],
      })
      navigate({ to: '/blog' })
    },
  })
}
