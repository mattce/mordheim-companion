const getLevel = (xp: number, ladder: number[]) => {
  return ladder.reduce((acc, step, index) => {
    return step <= xp //
      ? index + 1
      : acc
  }, 0)
}

export default getLevel
