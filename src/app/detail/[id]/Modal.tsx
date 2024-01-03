'use client'

import React from 'react'
import cx from 'classnames'

type ModalProps = {
  label: string | null | undefined
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setIsOpen((isOpen) => !isOpen)
  }

  if (!props.label) {
    return null
  }

  return (
    <>
      <span onClick={handleToggle}>{props.label}</span>
      <div
        className={cx('fixed left-0 top-0 z-10 h-full w-full bg-neutral-900/50', { hidden: !isOpen, block: isOpen })}
        onClick={handleToggle}
      >
        <div className="absolute inset-4 overflow-y-auto bg-neutral-200 p-4 text-neutral-950">
          <button className="absolute right-0 top-0 m-4" onClick={handleToggle}>
            &times;
          </button>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Modal
