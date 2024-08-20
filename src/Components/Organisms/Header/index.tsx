"use client";

import { useEffect, useState } from 'react';
import { FiChevronDown, FiX, FiMenu, FiChevronUp } from 'react-icons/fi'
import Link from "next/link";

import { ActiveLink } from '../../Atoms/ActiveLink'
import { Dropdown } from '../../Atoms/Dropdown'

import { HeaderContent } from '../../../Helpers/Constants/HeaderContent'

import styles from './styles.module.scss'
import Image from 'next/image';

export function Header() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const [asPath, setCurrentUrl] = useState<string>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.pathname);
    }
  }, []);

  function handleMenuClick() {
    setIsClicked(!isClicked);
  }

  function handleDropdownClick() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function onMouseEnter() {
    if (window.innerWidth < 968) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
  }

  function onMouseLeave() {
    setIsDropdownOpen(false);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image src={HeaderContent.image.src} alt={HeaderContent.image.imageAlt} />
          </Link>
        </div>
        {isClicked ? (
          <FiX className={styles.hamburgerMenu} onClick={handleMenuClick} />
        ) : (
          <FiMenu className={styles.hamburgerMenu} onClick={handleMenuClick} />
        )}
        <nav className={isClicked ? styles.menuIsOpen : ""}>
          <ActiveLink
            activeClassName={styles.active}
            currentPath={asPath}
            href={HeaderContent.inicio.href}
            legacyBehavior
          >
            <a>{HeaderContent.inicio.title}</a>
          </ActiveLink>
          {HeaderContent.dropdown && (
            <div
              className={styles.dropdown}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={handleDropdownClick}
            >
              <div>
                {HeaderContent.dropdown.title}
                {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              {isDropdownOpen && <Dropdown />}
            </div>
          )}
          {HeaderContent.items.map((item) => (
            <ActiveLink
              activeClassName={styles.active}
              currentPath={asPath}
              href={item.href}
              key={item.title}
              legacyBehavior
            >
              <a>{item.title}</a>
            </ActiveLink>
          ))}
        </nav>
      </div>
    </header>
  );
}