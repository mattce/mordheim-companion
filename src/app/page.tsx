import React from 'react'
import { print } from 'graphql'
import gql from 'graphql-tag'
import Link from 'next/link'

import queryContentful from '@/utils/queryContentful'

import type { RootPageQuery } from '@/types'

const RootPage: React.FC = async () => {
  const data = await queryContentful<RootPageQuery>(rootPageQuery)

  return (
    <main>
      <ul>
        {data?.rosterCollection?.items.map((item) => (
          <li key={item?.sys.id}>
            <Link href={'/detail/' + item?.sys.id}>
              <p>{item?.name}</p>
              <p>{item?.type}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

const rootPageQuery = print(gql`
  query RootPage {
    rosterCollection {
      items {
        sys {
          id
        }
        name
        type
      }
    }
  }
`)

export default RootPage
