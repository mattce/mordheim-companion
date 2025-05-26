import { print } from 'graphql'
import gql from 'graphql-tag'

import BlackPowderWeapon, { type BlackPowderWeaponProps } from '@/modules/BlackPowderWeapon/BlackPowderWeapon'
import SpecialRuleModule from '@/modules/SpecialRule'

import type { BlackPowderWeaponModuleFragment, Module } from '@/types'

export type BlackPowderWeaponModuleProps = BlackPowderWeaponProps

const BlackPowderWeaponModule: Module<BlackPowderWeaponModuleFragment, BlackPowderWeaponModuleProps> = (props) => {
  return <BlackPowderWeapon {...props} />
}

BlackPowderWeaponModule.mapper = (data) => {
  return {
    _id: data?.sys.id ?? null,
    _typename: data?.__typename ?? null,
    description: data?.description?.json ?? null,
    name: data?.name ?? null,
    specialRules: data?.specialRulesCollection?.items.map((item) => SpecialRuleModule.mapper(item)) ?? [],
  }
}

BlackPowderWeaponModule.fragment = print(gql`
  fragment BlackPowderWeaponModule on BlackPowderWeapon {
    __typename
    sys {
      id
    }
    name
    description {
      json
    }
    specialRulesCollection(limit: 10) {
      items {
        ...SpecialRuleModule
      }
    }
  }

  ${SpecialRuleModule.fragment}
`)

export default BlackPowderWeaponModule
