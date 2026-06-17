import { useQuery } from '@tanstack/react-query'
import { getUsers } from '@/api/api.ts'
import { TriangleAlert } from 'lucide-react'
import type { Post } from 'src/types/post.ts'
import { ErrorCom } from '@/error/ErrorCom'
import type { AxiosError } from 'axios'

export function Profile() {
  const { isPending, error, data } = useQuery<Post[], AxiosError>({
    queryKey: ['users'],
    queryFn: () => getUsers().then(res => res.data),
  })

  if (isPending) return 'Loading...'

  if (error) return <ErrorCom error={error} />
  return (
    <>
      this is profile
      <TriangleAlert />
      {data?.map((item, index) => {
        return <li key={index}>{item.id}</li>
      })}
    </>
  )
}
