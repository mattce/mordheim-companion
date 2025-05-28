import React from 'react'
import { print } from 'graphql'
import gql from 'graphql-tag'

import DetailPageModule from '@/modules/DetailPage'
import queryContentful from '@/utils/queryContentful'

import type { DetailPageLookupQuery, DetailPageQuery } from '@/types'

const DetailPage: React.FC<{ params: Promise<{ id: string }> }> = async (props) => {
  const { id } = await props.params
  const data = await queryContentful<DetailPageQuery>(detailPageQuery, { id })

  return <DetailPageModule {...DetailPageModule.mapper(data?.roster ?? null)} />
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
      ...DetailPageModule
    }
  }

  ${DetailPageModule.fragment}
`)

export default DetailPage
