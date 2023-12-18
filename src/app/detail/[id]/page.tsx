import React from 'react'
import { print } from 'graphql'
import gql from 'graphql-tag'

import { DetailPageLookupQuery, DetailPageQuery } from '@/types'
import queryContentful from '@/utils/queryContentful'

const STATS_DICTIONARY = ['B', 'KG', 'BF', 'S', 'W', 'LP', 'I', 'A', 'MW']

const DetailPage: React.FC<{ params: { id: string } }> = async (props) => {
  const data = await queryContentful<DetailPageQuery>(detailPageQuery, { id: props.params.id })

  const heroes = data?.roster?.heroesCollection?.items ?? []
  const henchmen = data?.roster?.henchmenCollection?.items ?? []

  const members = [...heroes, ...henchmen]
  const experience = members.reduce((acc, member) => acc + (member?.experience || 0), 0)

  return (
    <div className="flex flex-col">
      <header className="flex h-32 flex-col bg-neutral-800 p-4">
        <h3 className="text-xl">{data?.roster?.name}</h3>
        <p className="text-sm">{data?.roster?.type}</p>
        <ul className="mt-auto flex justify-between">
          <li>🪙 {data?.roster?.gold}</li>
          <li>💎 {data?.roster?.wyrdstone}</li>
          <li>📈 {experience + members.length * 5}</li>
          <li>📦 1</li>
        </ul>
      </header>
      <h3 className="p-4 text-xl">Heroes:</h3>
      <ul>
        {heroes.map((item) => {
          const stats = item?.stats?.split(',') ?? []
          return (
            <li className="mb-4 bg-neutral-800 p-4" key={item?.name}>
              <p>{item?.name}</p>
              <p className="text-sm">{item?.type}</p>
              <ul className="-mx-3 mt-2 flex">
                {stats.map((stat, index) => (
                  <li className="flex-1 text-center" key={index}>
                    <p className="bg-neutral-950">{STATS_DICTIONARY[index]}</p>
                    <p className="border border-neutral-950 bg-neutral-200 text-neutral-900">{stat}</p>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
      <h3 className="p-4 text-xl">Henchmen:</h3>
      <ul>
        {henchmen.map((item) => {
          const stats = item?.stats?.split(',') ?? []
          return (
            <li className="mb-4 bg-neutral-800 p-4" key={item?.name}>
              <p>{item?.name}</p>
              <p className="text-sm">{item?.type}</p>
              <ul className="-mx-3 mt-2 flex">
                {stats.map((stat, index) => (
                  <li className="flex-1 text-center" key={index}>
                    <p className="bg-neutral-950">{STATS_DICTIONARY[index]}</p>
                    <p className="border border-neutral-950 bg-neutral-200 text-neutral-900">{stat}</p>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
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
      name
      type
      gold
      wyrdstone
      storage
      heroesCollection {
        items {
          name
          type
          stats
          equipment
          meta
          experience
        }
      }
      henchmenCollection {
        items {
          name
          number
          type
          stats
          equipment
          meta
          experience
        }
      }
    }
  }
`)

export default DetailPage
