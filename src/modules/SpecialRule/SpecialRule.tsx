import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import type { Document } from '@contentful/rich-text-types'

export type SpecialRuleProps = {
  _id: string | null
  description: Document
  title: string | null
}

const SpecialRule: React.FC<SpecialRuleProps> = (props) => {
  const { description, title } = props
  return (
    <>
      <p className="font-bold">{title}</p>
      {documentToReactComponents(description)}
    </>
  )
}

export default SpecialRule
