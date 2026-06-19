// src/types/article.ts
export interface Article {
  id: string
  title: string
  content: string
  preview: string
}

export interface CreateArticleDto {
  title: string
  content: string
  preview: string
}

export interface UpdateArticleDto {
  title?: string
  content?: string
  preview?: string
}

export interface ArticleQuery {
  page?: number
  pageSize?: number
  keyword?: string
}
