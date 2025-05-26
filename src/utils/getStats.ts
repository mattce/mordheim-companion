import type { TStats } from '@/types'

const getStats = (stats: string | null | undefined): TStats | null => {
  const [B = 1, KG = 1, BF = 1, S = 1, W = 1, LP = 1, I = 1, A = 1, MW = 1] = stats?.split(',') ?? []

  return [
    ['B', +B],
    ['KG', +KG],
    ['BF', +BF],
    ['S', +S],
    ['W', +W],
    ['LP', +LP],
    ['I', +I],
    ['A', +A],
    ['MW', +MW],
  ]
}

export default getStats
