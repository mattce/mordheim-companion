import React from 'react'
import { print } from 'graphql'
import gql from 'graphql-tag'

import { DetailPageLookupQuery } from '@/types'
import queryContentful from '@/utils/queryContentful'

const DetailPage: React.FC = () => {
  return <div>DetailPage here</div>
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

export default DetailPage
