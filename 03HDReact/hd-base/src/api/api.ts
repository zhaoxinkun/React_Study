import request from '@/api/axios.ts'

export function getUsers() {
  return request.get('/postss')
}
