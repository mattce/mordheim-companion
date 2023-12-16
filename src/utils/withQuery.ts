const withQuery = (url: string, query?: Record<string, string>) => {
  const _url = new URL(url)

  Object.keys(query || {}).forEach((key) => {
    const value = (query && query[key]) || null
    value !== null && _url.searchParams.append(key, value)
  })

  return _url.href
}

export default withQuery
