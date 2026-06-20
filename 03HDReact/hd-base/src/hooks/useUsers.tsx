import { useQuery } from '@tanstack/react-query'
import { getUser } from '@/api/user.ts'
import type { AxiosError } from 'axios'
import type { User } from '@/types/user.ts'

export function useUsers() {
  return useQuery<User[], AxiosError>({
    queryKey: ['user'],
    queryFn: getUser,
  })
}
