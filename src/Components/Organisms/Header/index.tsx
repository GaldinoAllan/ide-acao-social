"use client";

import { useState, useEffect } from 'react';
import { FiChevronDown, FiX, FiMenu, FiChevronUp } from 'react-icons/fi'
import Link from "next/link";
import { Dropdown } from '../../Atoms/Dropdown'
import { HeaderContent } from '../../../Helpers/Constants/HeaderContent'

import styles from './styles.module.scss'
import Image from 'next/image';

export function Header() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>(""); // Estado para armazenar o link ativo

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log("Scroll Position:", scrollPosition);
  
      let currentSection = "";
      
      document.querySelectorAll('div[id]').forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 400;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.getAttribute('id');
        
        console.log("Checking section:", sectionId, "Top:", sectionTop, "Height:", sectionHeight);
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          console.log("section element", sectionElement)
          currentSection = sectionId!;
        }
      });
  
      if (currentSection) {
        console.log("Current section:", `/#${currentSection}`);
        setActiveLink(`/#${currentSection}`);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
          <Link href="/" className={styles.imageLink}>
            <Image
              src={HeaderContent.image.src}
              alt={HeaderContent.image.imageAlt}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
        {isClicked ? (
          <FiX className={styles.hamburgerMenu} onClick={handleMenuClick} />
        ) : (
          <FiMenu className={styles.hamburgerMenu} onClick={handleMenuClick} />
        )}
        <nav className={isClicked ? styles.menuIsOpen : ""}>
          <Link
            href={HeaderContent.inicio.href}
            className={activeLink === HeaderContent.inicio.href ? styles.active : ""}
            onClick={() => setActiveLink(HeaderContent.inicio.href)}
          >
            {HeaderContent.inicio.title}
          </Link>
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
            <Link
              href={item.href}
              key={item.title}
              className={activeLink === item.href ? styles.active : ""}
              onClick={() => setActiveLink(item.href)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}