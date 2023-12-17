import React from 'react'
import { print } from 'graphql'
import gql from 'graphql-tag'

import { DetailPageLookupQuery, DetailPageQuery } from '@/types'
import queryContentful from '@/utils/queryContentful'

const DetailPage: React.FC<{ params: { id: string } }> = async (props) => {
  const data = await queryContentful<DetailPageQuery>(detailPageQuery, { id: props.params.id })

  return (
    <div>
      <p>Gold: {data?.roster?.gold}</p>
      <p>Wyrdstone: {data?.roster?.wyrdstone}</p>
      <p>Heroes:</p>
      <ul>
        {data?.roster?.heroesCollection?.items.map((item) => (
          <li key={item?.name} style={{ marginLeft: '1rem' }}>
            <p>{item?.name}</p>
          </li>
        ))}
      </ul>
      <p>Henchmen:</p>
      <ul>
        {data?.roster?.henchmenCollection?.items.map((item) => (
          <li key={item?.name} style={{ marginLeft: '1rem' }}>
            <p>{item?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function generateStaticParams() {
  const data = await queryContentful<DetailPageLookupQuery>(detailPageLookup)

  return data?.rosterCollection?.items.map((item) => ({ id: item?.sys.id })).filter((item) => !!item.id) ?? []
}

const detailPageLookup = print(gql`
  query DetailPageLookup {
    rosterCollection {
      items {
        sys {
          id
        }
      }
    }
  }
`)

const detailPageQuery = print(gql`
  query DetailPage($id: String!) {
    roster(id: $id) {
      gold
      wyrdstone
      storage
      heroesCollection {
        items {
          name
        }
      }
      henchmenCollection {
        items {
          name
        }
      }
    }
  }
`)

export default DetailPage
