/***
 * @desc 封装所有的Article的请求
 */

import request from '@/api/axios'
import type { Article, CreateArticleDto, UpdateArticleDto } from '@/types/article'

// 获取Article列表
export async function getArticleList() {
  const { data } = await request.get<Article[]>('/article')
  return data
}

// 获取Article详情
export async function getArticleDetail(id: string) {
  const { data } = await request.get<Article>(`/article/${id}`)
  return data
}

// 添加article数据
export function createArticle(data: CreateArticleDto) {
  return request.post<Article>('/article', data)
}

// 更新article数据
export function updateArticle(id: string, data: UpdateArticleDto) {
  return request.patch<Article>(`/article/${id}`, data)
}

// 删除article数据
export function deleteArticle(id: string) {
  return request.delete<Article>(`/article/${id}`)
}
