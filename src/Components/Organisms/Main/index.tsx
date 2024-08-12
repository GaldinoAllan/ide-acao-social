import Image from 'next/image';
import titleImage from '../../../assets/Natal2024Title.png';
import adBelemImage from '../../../assets/adBelemLogo.png';
import jesusImage from '../../../assets/jesus.png';

import styles from "./styles.module.scss"

export const Main = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <aside className={styles.rightContent}>
          <Image
            src={titleImage}
            alt="Ide: Ação Social de Natal - O Amor que nos chaou a servir - 1 João 4:19"
            width={800}
          />
          <Image
            src={adBelemImage}
            alt="Logo Assembléia de Deus ministério Belém"
            width={400}
          />
        </aside>
        <aside className={styles.leftContent}>
          <Image
            src={jesusImage}
            alt="Jesus"
            width={500}
          />
        </aside>
      </div>
    </div>
  )
}