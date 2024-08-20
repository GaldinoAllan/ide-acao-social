import Link from 'next/link'
import { useState } from 'react'

import { DropdownItems } from '../../../Helpers/Constants/DropdownItems'

import styles from './styles.module.scss'

export function Dropdown() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <ul
      onClick={handleClick}
      className={
        click
          ? `${styles.dropdownContainer} ${styles.clicked}`
          : styles.dropdownContainer
      }
    >
      {DropdownItems.map(item => (
        <li key={item.path}>
          <div
            className={styles.dropdownLink}
            onClick={() => setClick(false)}
          >
            <Link href={item.path} legacyBehavior>
              <a>{item.title}</a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}