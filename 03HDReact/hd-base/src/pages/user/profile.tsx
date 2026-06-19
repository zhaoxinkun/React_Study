import { useQuery } from '@tanstack/react-query'
import { TriangleAlert } from 'lucide-react'
import { ErrorCom } from '@/error/ErrorCom'
import type { AxiosError } from 'axios'
import { getUser } from '@/api/user.ts'
import type { User } from '@/types/user.ts'

export function Profile() {
  const { isPending, error, data } = useQuery<User[], AxiosError>({
    queryKey: ['users'],
    queryFn: getUser,
  })

  if (isPending) return 'Loading...'

  if (error) return <ErrorCom error={error} />
  return (
    <>
      this is profile
      <TriangleAlert />
      {data?.map(item => (
        <ul>
          <li key={item.id}>{item.id}</li>
        </ul>
      ))}
    </>
  )
}
