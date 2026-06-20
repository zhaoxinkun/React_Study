// src/api/article.ts
import request from '@/api/axios'
import type { Article, CreateArticleDto, UpdateArticleDto } from '@/types/article'

export async function getArticle() {
  const { data } = await request.get<Article[]>('/article')
  return data
}

export function createArticle(data: CreateArticleDto) {
  return request.post<Article>('/article', data)
}

export function updateArticle(id: string, data: UpdateArticleDto) {
  return request.patch<Article>(`/article/${id}`, data)
}

export function deleteArticle(id: string) {
  return request.delete<void>(`/article/${id}`)
}
