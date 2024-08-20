"use client";
import { Images } from "../../../assets/Image";
import { Strings } from "../../../Helpers/Strings"
import { Button } from "../../Atoms/Button"
import { PolaroidImage } from "../../Atoms/PolaroidImage";
import styles from "./styles.module.scss"

export const HowToHelp = () => {
  const handleVolunteerHelpButtonClick = () => {
    console.log("Quero ser voluntário")
  }

  const handleHelpButtonClick = () => {
    console.log("Quero ajudar")
  }

  return (
    <div className={styles.background} id="como_ajudar">
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{Strings.HowToHelpTitle}</h1>
          <p className={styles.description}>{Strings.HowToHelpDescription}</p>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonContent}>
              <Button text="Quero ser voluntário" onClick={handleVolunteerHelpButtonClick} />
              <Button text="Quero ajudar de outra forma" onClick={handleHelpButtonClick} styleType="secondary" />
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <PolaroidImage
            imageSrc={Images.helpImage.src}
            imageAlt={Images.helpImage.imageAlt}
            caption={Images.helpImage.caption}
          />
        </div>
      </div>
    </div>
  )
}