import React from 'react'

import SpecialRuleModule, { type SpecialRuleModuleProps } from '@/modules/SpecialRule'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Modal from '../../app/detail/[id]/Modal'

import type { Document } from '@contentful/rich-text-types'

export type ArmourProps = {
  _id: string | null
  _typename: 'Armour' | null
  description: Document | null
  name: string | null
  specialRules: SpecialRuleModuleProps[]
}

const Armour: React.FC<ArmourProps> = (props) => {
  const { description, name, specialRules } = props
  return (
    <Modal label={name}>
      <p className="mb-4 font-bold">{name}</p>
      {description && documentToReactComponents(description)}
      {!!specialRules.length && (
        <ul className="mt-4">
          {specialRules.map((specialRule) => (
            <SpecialRuleModule {...specialRule} key={specialRule._id} />
          ))}
        </ul>
      )}
    </Modal>
  )
}

export default Armour
