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

  const experience = [...heroes, ...henchmen].reduce((acc, member) => acc + (member?.experience || 0), 0)
  const membersCount = heroes.length + henchmen.reduce((acc, member) => acc + (member?.number || 1), 0)

  return (
    <div className="flex flex-col">
      <header className="flex h-32 flex-col bg-neutral-800 p-4">
        <h3 className="text-xl">{data?.roster?.name}</h3>
        <p className="text-sm">{data?.roster?.type}</p>
        <ul className="mt-auto flex justify-between">
          <li>🪙 {data?.roster?.gold}</li>
          <li>💎 {data?.roster?.wyrdstone}</li>
          <li>📈 {experience + membersCount * 5}</li>
          <li>📦 1</li>
        </ul>
      </header>
      <h3 className="p-4 text-xl">Heroes:</h3>
      <ul>
        {heroes.map((item) => {
          const stats = item?.stats?.split(',') ?? []
          return (
            <li className="mb-4 bg-neutral-800 p-4" key={item?.sys.id}>
              <p>{item?.name}</p>
              <p className="text-sm">{item?.type}</p>
              <ul className="mt-2 flex">
                {stats.map((stat, index) => (
                  <li className="flex-1 text-center" key={STATS_DICTIONARY[index]}>
                    <p className="bg-neutral-950">{STATS_DICTIONARY[index]}</p>
                    <p className="border border-neutral-950 bg-neutral-200 text-neutral-900">{stat}</p>
                  </li>
                ))}
              </ul>
              {item?.equipmentCollection && (
                <ul className="mt-2">
                  {item.equipmentCollection.items.map((item, index) => (
                    <li key={`${index}_${item?.sys.id}`}>{item?.name}</li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
      <h3 className="p-4 text-xl">Henchmen:</h3>
      <ul>
        {henchmen.map((item) => {
          const stats = item?.stats?.split(',') ?? []
          return (
            <li className="mb-4 bg-neutral-800 p-4" key={item?.sys.id}>
              <p>{item?.name}</p>
              <p className="text-sm">{item?.type}</p>
              <ul className="mt-2 flex">
                {stats.map((stat, index) => (
                  <li className="flex-1 text-center" key={STATS_DICTIONARY[index]}>
                    <p className="bg-neutral-950">{STATS_DICTIONARY[index]}</p>
                    <p className="border border-neutral-950 bg-neutral-200 text-neutral-900">{stat}</p>
                  </li>
                ))}
              </ul>
              {item?.equipmentCollection && (
                <ul className="mt-2">
                  {item.equipmentCollection.items.map((item, index) => (
                    <li key={`${index}_${item?.sys.id}`}>{item?.name}</li>
                  ))}
                </ul>
              )}
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
      heroesCollection(limit: 10) {
        items {
          sys {
            id
          }
          name
          type
          stats
          equipmentCollection(limit: 10) {
            items {
              ... on Armour {
                sys {
                  id
                }
                name
              }
              ... on MeleeWeapon {
                sys {
                  id
                }
                name
              }
              ... on BlackPowderWeapon {
                sys {
                  id
                }
                name
              }
            }
          }
          meta
          experience
        }
      }
      henchmenCollection(limit: 10) {
        items {
          sys {
            id
          }
          name
          number
          type
          stats
          equipmentCollection(limit: 10) {
            items {
              ... on Armour {
                sys {
                  id
                }
                name
              }
              ... on MeleeWeapon {
                sys {
                  id
                }
                name
              }
              ... on BlackPowderWeapon {
                sys {
                  id
                }
                name
              }
            }
          }
          meta
          experience
        }
      }
    }
  }
`)

export default DetailPage
