import { useMemo } from 'react'
import { Style, Avatar } from '@dicebear/core'
import lorelei from '@dicebear/styles/lorelei.json' with { type: 'json' }

const style = new Style(lorelei)

interface UserAvatarProps {
  seed: string
}

// 随机头像组件
export function UserAvatar({ seed }: UserAvatarProps) {
  const avatar = useMemo(() => {
    return new Avatar(style, {
      seed,
      size: 128,
    }).toDataUri()
  }, [seed])

  return <img src={avatar} alt={seed} className="size-16 rounded-full" />
}
