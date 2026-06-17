import { useQuery } from '@tanstack/react-query'
import { getUsers } from '@/api/api.ts'

interface Post {
  id: string
  title?: string
  views?: number
}

export function Profile() {
  const { isPending, error, data } = useQuery<Post[]>({
    queryKey: ['users'],
    queryFn: () => getUsers().then(res => res.data),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <>
      this is profile
      {data.map((item, index) => {
        return <li key={index}>{item.id}</li>
      })}
    </>
  )
}
