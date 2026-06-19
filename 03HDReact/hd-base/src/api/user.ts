import request from '@/api/axios.ts'
import type { User } from '@/types/user.ts'

export async function getUser() {
  const { data } = await request.get<User[]>('/user')
  console.log('🚀 ~ getUser ~ data: ', data)
  return data
}
