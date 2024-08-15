import { ImageInterface, Images } from "../../../assets/Image"
import { Strings } from "../../../Helpers/Strings"
import { PolaroidImage } from "../../Atoms/PolaroidImage"
import styles from "./styles.module.scss"

export const AboutEvent = () => {
  const images: ImageInterface[] = [
    Images.abracoCoracao,
    Images.carrinhoAlegria,
    Images.corteCabelo,
    Images.doces,
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