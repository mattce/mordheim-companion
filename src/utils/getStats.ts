import type { TStats } from '@/types'

const getStats = (stats: string | null | undefined): TStats | null => {
  const [M = 1, WS = 1, BS = 1, S = 1, T = 1, LP = 1, I = 1, A = 1, LD = 1] = stats?.split(',') ?? []

  return [
    ['M', +M],
    ['WS', +WS],
    ['BS', +BS],
    ['S', +S],
    ['T', +T],
    ['LP', +LP],
    ['I', +I],
    ['A', +A],
    ['LD', +LD],
  ]
}

export default getStats
