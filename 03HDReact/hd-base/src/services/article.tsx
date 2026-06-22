import { useMutation } from '@tanstack/react-query'
import { deleteArticle } from '@/api/article.ts'

export const useDeleteArticle = () => {
  return useMutation({
    mutationFn: (id: string) => deleteArticle(id),
    onSuccess: result => {
      console.log('success', result)
    },
  })
}
