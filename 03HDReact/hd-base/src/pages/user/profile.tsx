import { TriangleAlert } from 'lucide-react'
import { ErrorCom } from '@/error/ErrorCom'
import { useUsers } from '@/hooks/useUsers.tsx'

export function Profile() {
  const { isPending, error, data } = useUsers()

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
