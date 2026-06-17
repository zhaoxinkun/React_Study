import request from '@/api/request.ts'

export function getUsers() {
  return request.get('/posts')
}
