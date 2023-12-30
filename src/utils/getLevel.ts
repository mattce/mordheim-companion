const getLevel = (xp: number, ladder: number[]) => {
  return ladder.reduce((acc, step, index) => {
    return step <= xp //
      ? index + 1
      : acc
  }, 0)
}

// [2, 4, 6, 8]
//
// 3 xp

export default getLevel
