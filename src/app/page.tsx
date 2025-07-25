import React from 'react'
import { print } from 'graphql'
import gql from 'graphql-tag'
import Link from 'next/link'

import queryContentful from '@/utils/queryContentful'

import type { RootPageQuery } from '@/types'

const RootPage: React.FC = async () => {
  const data = await queryContentful<RootPageQuery>(rootPageQuery)

  return (
    <ul>
      {data?.rosterCollection?.items.map((item) => (
        <li className="mb-6" key={item?.sys.id}>
          <Link className="block h-32 bg-gray-400 p-4" href={'/detail/' + item?.sys.id}>
            <h3 className="text-xl">{item?.name}</h3>
            <p className="text-sm">{item?.type}</p>
          </Link>
        </li>
      ))}
    </ul>
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
