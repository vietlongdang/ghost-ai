import { Liveblocks } from "@liveblocks/node"

const CURSOR_COLORS = [
  "#52A8FF",
  "#BF7AF0",
  "#FF990A",
  "#FF6166",
  "#F75F8F",
  "#62C073",
  "#0AC7B4",
  "#EDEDED",
] as const

const globalForLiveblocks = globalThis as typeof globalThis & {
  liveblocks?: Liveblocks
}

function createLiveblocks(): Liveblocks {
  const secret = process.env.LIVEBLOCKS_SECRET_KEY

  if (!secret) {
    throw new Error("LIVEBLOCKS_SECRET_KEY is not set")
  }

  return new Liveblocks({ secret })
}

export function getLiveblocks(): Liveblocks {
  if (globalForLiveblocks.liveblocks) {
    return globalForLiveblocks.liveblocks
  }

  const client = createLiveblocks()

  if (process.env.NODE_ENV !== "production") {
    globalForLiveblocks.liveblocks = client
  }

  return client
}

export function getUserColor(userId: string): string {
  let hash = 0

  for (let index = 0; index < userId.length; index += 1) {
    hash = (hash * 31 + userId.charCodeAt(index)) >>> 0
  }

  return CURSOR_COLORS[hash % CURSOR_COLORS.length]
}
