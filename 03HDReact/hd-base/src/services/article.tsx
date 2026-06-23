import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createArticle, deleteArticle } from '@/api/article.ts'
import type { CreateArticleDto } from '@/types/article.ts'
import { useNavigate } from '@tanstack/react-router'

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
