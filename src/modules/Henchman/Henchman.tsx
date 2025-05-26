import React from 'react'
import cx from 'classnames'

import ArmourModule, { type ArmourModuleProps } from '@/modules/Armour'
import BlackPowderWeaponModule, { type BlackPowderWeaponModuleProps } from '@/modules/BlackPowderWeapon'
import MeleeWeaponModule, { type MeleeWeaponModuleProps } from '@/modules/MeleeWeapon'
import { STATS_DICTIONARY, XP_LADDER_HENCHMEN } from '@/utils/consts'
import getLevel from '@/utils/getLevel'

import type { TStats } from '@/types'

export type HenchmanProps = {
  _id: string | null
  count: number | null
  equipment: (ArmourModuleProps | BlackPowderWeaponModuleProps | MeleeWeaponModuleProps | null)[]
  experience: number | null
  name: string | null
  stats: TStats | null
  type: string | null
}

const Henchman: React.FC<HenchmanProps> = (props) => {
  const { count, equipment, experience, name, stats, type } = props
  return (
    <>
      <p className="flex">
        {name}
        <span className="ml-auto">Level: {getLevel(experience || 0, XP_LADDER_HENCHMEN)}</span>
      </p>
      <p className="text-sm">{`${count} ${type}`}</p>
      <ul className="mt-2 flex">
        {stats?.map(([k, v]) => (
          <li className="flex-1 text-center" key={k}>
            <p className="bg-neutral-950">{k}</p>
            <p className="border border-neutral-950 bg-neutral-200 text-neutral-900">{v}</p>
          </li>
        ))}
      </ul>
      {!!equipment.length && (
        <ul className="mt-2">
          {equipment.map((item, index) => (
            <li key={`${index}_${item?._id}_${item}`}>
              {item?._typename === 'MeleeWeapon' && <MeleeWeaponModule {...item} />}
              {item?._typename === 'BlackPowderWeapon' && <BlackPowderWeaponModule {...item} />}
              {item?._typename === 'Armour' && <ArmourModule {...item} />}
            </li>
          ))}
        </ul>
      )}
      <ul className="flex flex-wrap">
        {Array.from({ length: 14 }, (_, i) => i + 1).map((v) => {
          return (
            <li className={cx('relative flex w-1/12')} key={v}>
              <span className="h-0 pt-[100%]" />
              <span className="absolute inset-px bg-neutral-200" />
              <span
                className={cx('absolute inset-[3px]', {
                  'border-2 border-neutral-950': XP_LADDER_HENCHMEN.includes(v),
                  'bg-neutral-400': (experience || 0) >= v,
                })}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Henchman
