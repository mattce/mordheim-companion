import { print } from 'graphql'
import gql from 'graphql-tag'

import SpecialRule, { type SpecialRuleProps } from '@/modules/SpecialRule/SpecialRule'

import type { Module, SpecialRuleModuleFragment } from '@/types'

export type SpecialRuleModuleProps = SpecialRuleProps

const SpecialRuleModule: Module<SpecialRuleModuleFragment, SpecialRuleProps> = (props) => {
  return <SpecialRule {...props} />
}

SpecialRuleModule.mapper = (data) => {
  return {
    _id: data?.sys.id ?? null,
    description: data?.description?.json ?? null,
    title: data?.title ?? null,
  }
}

SpecialRuleModule.fragment = print(gql`
  fragment SpecialRuleModule on SpecialRule {
    sys {
      id
    }
    title
    description {
      json
    }
  }
`)

export default SpecialRuleModule
