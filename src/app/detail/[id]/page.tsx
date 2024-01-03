import React from 'react'
import cx from 'classnames'
import { print } from 'graphql'
import gql from 'graphql-tag'

import { DetailPageLookupQuery, DetailPageQuery } from '@/types'
import getLevel from '@/utils/getLevel'
import queryContentful from '@/utils/queryContentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Modal from './Modal'

const STATS_DICTIONARY = ['B', 'KG', 'BF', 'S', 'W', 'LP', 'I', 'A', 'MW']
const XP_LADDER_HEROES = [2, 4, 6, 8, 11, 14, 17, 20, 24, 28, 32, 36, 41, 46, 51, 57, 63, 69, 76, 83, 90]
const XP_LADDER_HENCHMEN = [2, 5, 9, 14]

const DetailPage: React.FC<{ params: { id: string } }> = async (props) => {
  const data = await queryContentful<DetailPageQuery>(detailPageQuery, { id: props.params.id })

  const heroes = data?.roster?.heroesCollection?.items ?? []
  const henchmen = data?.roster?.henchmenCollection?.items ?? []

  const experience = [...heroes, ...henchmen].reduce((acc, member) => acc + (member?.experience || 0), 0)
  const membersCount = heroes.length + henchmen.reduce((acc, member) => acc + (member?.count || 1), 0)

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
              <p className="flex">
                {item?.name}
                <span className="ml-auto">Level: {getLevel(item?.experience || 0, XP_LADDER_HEROES)}</span>
              </p>
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
                    <li key={`${index}_${item?.sys.id}`}>
                      <Modal label={item?.name}>
                        <p className="mb-4">{item?.name}</p>
                        {documentToReactComponents(item?.description?.json)}
                        {item?.specialRulesCollection?.items.length && (
                          <ul className="mt-4">
                            {item?.specialRulesCollection?.items.map((item) => (
                              <li key={item?.title}>
                                <p className="font-bold">{item?.title}</p>
                                {documentToReactComponents(item?.description?.json)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Modal>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap">
                {Array.from({ length: 90 }, (_, i) => i + 1).map((v) => {
                  return (
                    <li className={cx('relative flex w-1/12')} key={v}>
                      <span className="h-0 pt-[100%]" />
                      <span className="absolute inset-px bg-neutral-200" />
                      <span
                        className={cx('absolute inset-[3px]', {
                          'border-2 border-neutral-950': XP_LADDER_HEROES.includes(v),
                          'bg-neutral-400': (item?.experience || 0) >= v,
                        })}
                      />
                    </li>
                  )
                })}
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
            <li className="mb-4 bg-neutral-800 p-4" key={item?.sys.id}>
              <p className="flex">
                {item?.name}
                <span className="ml-auto">Level: {getLevel(item?.experience || 0, XP_LADDER_HENCHMEN)}</span>
              </p>
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
                    <li key={`${index}_${item?.sys.id}`}>
                      <Modal label={item?.name}>
                        <p className="mb-4">{item?.name}</p>
                        {documentToReactComponents(item?.description?.json)}
                        {item?.specialRulesCollection?.items.length && (
                          <ul>
                            {item?.specialRulesCollection?.items.map((item) => (
                              <li className="mt-4" key={item?.title}>
                                <p className="font-bold">{item?.title}</p>
                                {documentToReactComponents(item?.description?.json)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Modal>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap">
                {Array.from({ length: 14 }, (_, i) => i + 1).map((v) => {
                  return (
                    <li className={cx('relative flex w-1/12')} key={v}>
                      <span className="h-0 pt-[100%]" />
                      <span className="absolute inset-px bg-neutral-200" />
                      <span
                        className={cx('absolute inset-[3px]', {
                          'border-2 border-neutral-950': XP_LADDER_HENCHMEN.includes(v),
                          'bg-neutral-400': (item?.experience || 0) >= v,
                        })}
                      />
                    </li>
                  )
                })}
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
                description {
                  json
                }
                specialRulesCollection(limit: 10) {
                  items {
                    title
                    description {
                      json
                    }
                  }
                }
              }
              ... on MeleeWeapon {
                sys {
                  id
                }
                name
                description {
                  json
                }
                specialRulesCollection(limit: 10) {
                  items {
                    title
                    description {
                      json
                    }
                  }
                }
              }
              ... on BlackPowderWeapon {
                sys {
                  id
                }
                name
                description {
                  json
                }
                specialRulesCollection(limit: 10) {
                  items {
                    title
                    description {
                      json
                    }
                  }
                }
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
          count
          type
          stats
          equipmentCollection(limit: 10) {
            items {
              ... on Armour {
                sys {
                  id
                }
                name
                description {
                  json
                }
                specialRulesCollection(limit: 10) {
                  items {
                    title
                    description {
                      json
                    }
                  }
                }
              }
              ... on MeleeWeapon {
                sys {
                  id
                }
                name
                description {
                  json
                }
                specialRulesCollection(limit: 10) {
                  items {
                    title
                    description {
                      json
                    }
                  }
                }
              }
              ... on BlackPowderWeapon {
                sys {
                  id
                }
                name
                description {
                  json
                }
                specialRulesCollection(limit: 10) {
                  items {
                    title
                    description {
                      json
                    }
                  }
                }
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
