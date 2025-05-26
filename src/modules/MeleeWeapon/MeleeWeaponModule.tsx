import { print } from 'graphql'
import gql from 'graphql-tag'

import MeleeWeapon, { type MeleeWeaponProps } from '@/modules/MeleeWeapon/MeleeWeapon'
import SpecialRuleModule from '@/modules/SpecialRule'

import type { MeleeWeaponModuleFragment, Module } from '@/types'

export type MeleeWeaponModuleProps = MeleeWeaponProps

const MeleeWeaponModule: Module<MeleeWeaponModuleFragment, MeleeWeaponModuleProps> = (props) => {
  return <MeleeWeapon {...props} />
}

MeleeWeaponModule.mapper = (data) => {
  return {
    _id: data?.sys.id ?? null,
    _typename: data?.__typename ?? null,
    description: data?.description?.json ?? null,
    name: data?.name ?? null,
    specialRules: data?.specialRulesCollection?.items.map((item) => SpecialRuleModule.mapper(item)) ?? [],
  }
}

MeleeWeaponModule.fragment = print(gql`
  fragment MeleeWeaponModule on MeleeWeapon {
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

export default MeleeWeaponModule
