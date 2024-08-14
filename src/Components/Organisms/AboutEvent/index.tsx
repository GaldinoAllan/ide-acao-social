import { randomUUID } from "crypto"
import { StaticImageData } from "next/image"
import { Strings } from "../../../Helpers/Strings"
import Image from '../../../assets/Image'
import { PolaroidImage } from "../../Atoms/PolaroidImage"
import styles from "./styles.module.scss"

interface AboutEventImageInterface {
  id: string;
  src: StaticImageData;
  caption?: string;
  imageAlt: string;
}

export const AboutEvent = () => {
  const images: AboutEventImageInterface[] = [
    { id: randomUUID(), src: Image.acaoSocialTeste, imageAlt: "Image 1" },
    { id: randomUUID(), src: Image.acaoSocialTeste, caption: "Caption 2", imageAlt: "Image 2" },
    { id: randomUUID(), src: Image.acaoSocialTeste, imageAlt: "Image 3" },
    { id: randomUUID(), src: Image.acaoSocialTeste, caption: "Caption 4", imageAlt: "Image 4" },
  ]
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <h1 className={styles.title}>{Strings.AboutUsTitle}</h1>
        <p className={styles.description}>{Strings.AboutUsDescription}</p>
        <div className={styles.imagesWrapper}>
          <div className={styles.imagesContainer}>
            {
              images.map(image => (
                <PolaroidImage
                  key={image.id}
                  imageSrc={image.src}
                  caption={image.caption}
                  imageAlt={image.imageAlt}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}