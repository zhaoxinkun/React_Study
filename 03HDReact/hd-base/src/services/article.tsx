import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteArticle } from '@/api/article.ts'

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
