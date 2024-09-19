"use client";

import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

import titleImage from '../../../assets/Natal2024Title.png';
import adBelemImage from '../../../assets/adBelemLogo.png';
import jesusImage from '../../../assets/jesus.png';

import styles from "./styles.module.scss"
import { Button } from '../../Atoms/Button';

export const Main = () => {
  const handleContributeClick = () => {
    console.log('Contribute button clicked')
  }

  const handlePDFClick = () => {
    console.log('PDF button clicked')
  }

  return (
    <div className={styles.background} id="inicio">
      <div className={styles.content}>
        <aside className={styles.leftContent}>
          <div className={styles.socialLogoImage}>
            <Image
              src={titleImage}
              alt="Ide: Ação Social de Natal - O Amor que nos chaou a servir - 1 João 4:19"
              style={{ width: '100%', height: "100%", objectFit: 'contain' }}

            />
          </div>
          <div className={styles.adBelemLogoContainer}>
            <Image
              src={adBelemImage}
              alt="Logo Assembléia de Deus ministério Belém"
              width={400}
            />
          </div>
        </aside>
        <aside className={styles.rightContent}>
          <Image
            src={jesusImage}
            alt="Jesus"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </aside>
      </div>
      <div className={styles.downArrows}>
        <FaChevronDown />
        <FaChevronDown />
      </div>
    </div>
  )
}