import { print } from 'graphql'
import gql from 'graphql-tag'

import ArmourModule from '@/modules/Armour'
import BlackPowderWeaponModule from '@/modules/BlackPowderWeapon'
import Hero, { type HeroProps } from '@/modules/Hero/Hero'
import MeleeWeaponModule from '@/modules/MeleeWeapon'
import getStats from '@/utils/getStats'

import type { HeroModuleFragment, Module } from '@/types'

export type HeroModuleProps = HeroProps

const HeroModule: Module<HeroModuleFragment, HeroModuleProps> = (props) => {
  return <Hero {...props} />
}

HeroModule.mapper = (data) => {
  return {
    _id: data?.sys.id ?? null,
    equipment:
      data?.equipmentCollection?.items.map((item) => {
        if (item?.__typename === 'Armour') {
          return ArmourModule.mapper(item)
        }
        if (item?.__typename === 'BlackPowderWeapon') {
          return BlackPowderWeaponModule.mapper(item)
        }
        if (item?.__typename === 'MeleeWeapon') {
          return MeleeWeaponModule.mapper(item)
        }
        return null
      }) || [],
    experience: data?.experience || null,
    name: data?.name || null,
    stats: getStats(data?.stats),
    type: data?.type || null,
  }
}

HeroModule.fragment = print(gql`
  fragment HeroModule on Hero {
    sys {
      id
    }
    name
    type
    stats
    equipmentCollection(limit: 10) {
      items {
        ...ArmourModule
        ...BlackPowderWeaponModule
        ...MeleeWeaponModule
      }
    }
    meta
    experience
  }

  ${ArmourModule.fragment}
  ${BlackPowderWeaponModule.fragment}
  ${MeleeWeaponModule.fragment}
`)

export default HeroModule
