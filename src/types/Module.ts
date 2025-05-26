import React from 'react'

export type Module<F, P, O = unknown> = React.FC<P & O> & {
  mapper: (data: F | null) => P
  fragment: string
}
