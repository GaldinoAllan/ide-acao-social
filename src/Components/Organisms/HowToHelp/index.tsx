"use client";
import { encode } from "punycode";
import { Images } from "../../../assets/Image";
import { Strings } from "../../../Helpers/Strings"
import { Button } from "../../Atoms/Button"
import { PolaroidImage } from "../../Atoms/PolaroidImage";
import styles from "./styles.module.scss"

export const HowToHelp = () => {
  const handleHelpButtonClick = () => {
    const encodedMessage = encodeURIComponent(Strings.WhatsAppHelpMessage);
    const whatsappUrl = `https://wa.me/${Strings.JoaoPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.background} id="como_ajudar">
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>{Strings.HowToHelpTitle}</h1>
          {Strings.HowToHelpDescription.split('\n').map((line, index) => (
            <p className={styles.description} key={index}>
              {line}
              <br />
              <br />
            </p>
          ))}
          <div className={styles.buttonContainer}>
            <div className={styles.buttonContent}>
              <Button text="Quero ajudar de alguma forma" onClick={handleHelpButtonClick} styleType="secondary" />
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