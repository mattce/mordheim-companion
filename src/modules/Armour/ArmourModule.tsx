import { print } from 'graphql'
import gql from 'graphql-tag'

import Armour, { type ArmourProps } from '@/modules/Armour/Armour'
import SpecialRuleModule from '@/modules/SpecialRule'

import type { ArmourModuleFragment, Module } from '@/types'

export type ArmourModuleProps = ArmourProps

const ArmourModule: Module<ArmourModuleFragment, ArmourModuleProps> = (props) => {
  return <Armour {...props} />
}

ArmourModule.mapper = (data) => {
  return {
    _id: data?.sys.id ?? null,
    _typename: data?.__typename ?? null,
    description: data?.description?.json ?? null,
    name: data?.name ?? null,
    specialRules: data?.specialRulesCollection?.items.map((item) => SpecialRuleModule.mapper(item)) ?? [],
  }
}

ArmourModule.fragment = print(gql`
  fragment ArmourModule on Armour {
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

export default ArmourModule
