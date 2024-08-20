import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import adBelemImage from '../../../assets/adBelemLogo.png';
import styles from './styles.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={adBelemImage}
            alt="Logo Assembléia de Deus ministério Belém"
            width={400}
          />
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <FaInstagram size={30} />
          </a>
        </div>

        <p className={styles.copyright}>© 2024 Your Company. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
