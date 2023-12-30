import withQuery from '@/utils/withQuery'

const queryContentful = async <T>(query: string, variables?: Record<string, any>) => {
  const _url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/mordheim-companion`
  const _query = { query: query, variables: JSON.stringify(variables || {}) }

  const response = await fetch(withQuery(_url, _query), {
    next: { revalidate: 10 },
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  const { data } = await response.json()

  if (response.ok) {
    return data as T
  }

  return null
}

export default queryContentful
