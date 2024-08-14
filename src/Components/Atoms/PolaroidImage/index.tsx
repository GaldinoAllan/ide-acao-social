import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

interface PolaroidProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  caption?: string;
}

export const PolaroidImage: React.FC<PolaroidProps> = ({ imageSrc, imageAlt, caption }) => {
  return (
    <div className={styles.polaroidContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={`Polaroid ${imageAlt}`}
          objectFit='cover'
          fill
        />
      </div>
      <div className={styles.caption}>{caption}</div>
    </div>
  );
};
