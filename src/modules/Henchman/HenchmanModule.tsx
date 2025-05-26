import { print } from 'graphql'
import gql from 'graphql-tag'

import ArmourModule from '@/modules/Armour'
import BlackPowderWeaponModule from '@/modules/BlackPowderWeapon'
import Henchman, { type HenchmanProps } from '@/modules/Henchman/Henchman'
import MeleeWeaponModule from '@/modules/MeleeWeapon'
import getStats from '@/utils/getStats'

import type { HenchmanModuleFragment, Module } from '@/types'

export type HenchmanModuleProps = HenchmanProps

const HenchmanModule: Module<HenchmanModuleFragment, HenchmanModuleProps> = (props) => {
  return <Henchman {...props} />
}

HenchmanModule.mapper = (data) => {
  return {
    _id: data?.sys.id ?? null,
    count: data?.count ?? null,
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

HenchmanModule.fragment = print(gql`
  fragment HenchmanModule on Henchman {
    sys {
      id
    }
    count
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

export default HenchmanModule
