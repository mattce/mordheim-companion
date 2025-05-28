import React from 'react'
import { print } from 'graphql'
import gql from 'graphql-tag'

import HenchmanModule, { type HenchmanModuleProps } from '@/modules/Henchman'
import HeroModule, { type HeroModuleProps } from '@/modules/Hero'

import type { DetailPageModuleFragment, Module } from '@/types'

export type DetailPageModuleProps = {
  gold: any | null
  henchmen: HenchmanModuleProps[] | null
  heroes: HeroModuleProps[] | null
  name: any | null
  type: any | null
  wyrdstone: any | null
}

const DetailPageModule: Module<DetailPageModuleFragment, DetailPageModuleProps> = (props) => {
  const { gold, name, type, wyrdstone } = props
  const heroes = props.heroes ?? []
  const henchmen = props.henchmen ?? []

  const experience = [...heroes, ...henchmen].reduce((acc, member) => acc + (member?.experience || 0), 0)
  const membersCount = heroes.length + henchmen.reduce((acc, member) => acc + (member?.count || 1), 0)

  return (
    <div className="flex flex-col">
      <header className="flex h-32 flex-col bg-gray-800 p-4">
        <h3 className="text-xl">{name}</h3>
        <p className="text-sm">{type}</p>
        <ul className="mt-auto flex justify-between">
          <li>🪙 {gold}</li>
          <li>💎 {wyrdstone}</li>
          <li>📈 {experience + membersCount * 5}</li>
          <li>📦 1</li>
        </ul>
      </header>
      <h3 className="p-4 text-xl">Heroes:</h3>
      <ul>
        {heroes.map((item) => (
          <HeroModule {...item} key={item._id} />
        ))}
      </ul>
      <h3 className="p-4 text-xl">Henchmen:</h3>
      <ul>
        {henchmen.map((item) => (
          <HenchmanModule {...item} key={item._id} />
        ))}
      </ul>
    </div>
  )
}

DetailPageModule.mapper = (data) => {
  return {
    gold: data?.gold ?? null,
    henchmen: data?.henchmenCollection?.items.map((item) => HenchmanModule.mapper(item)) ?? [],
    heroes: data?.heroesCollection?.items.map((item) => HeroModule.mapper(item)) ?? [],
    name: data?.name ?? null,
    type: data?.type ?? null,
    wyrdstone: data?.wyrdstone ?? null,
  }
}

DetailPageModule.fragment = print(gql`
  fragment DetailPageModule on Roster {
    name
    type
    gold
    wyrdstone
    storage
    heroesCollection(limit: 10) {
      items {
        ...HeroModule
      }
    }
    henchmenCollection(limit: 10) {
      items {
        ...HenchmanModule
      }
    }
  }

  ${HeroModule.fragment}
  ${HenchmanModule.fragment}
`)

export default DetailPageModule
