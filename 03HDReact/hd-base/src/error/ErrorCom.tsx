import type { AxiosError } from 'axios'
import type { ReactNode } from 'react'
import { E403 } from '@/error/E403.tsx'
import { E404 } from '@/error/E404.tsx'

export function ErrorCom({ error }: { error: AxiosError }): ReactNode {
  switch (error.status) {
    case 403:
      return <E403 />
    case 404:
      return <E404 />
  }
}
