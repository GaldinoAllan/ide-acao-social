"use client";
import { Images } from "../../../assets/Image";
import { Strings } from "../../../Helpers/Strings"
import { Button } from "../../Atoms/Button"
import styles from "./styles.module.scss"
import Image from "next/image";

export const EventLocation = () => {
  const handleHowToGetThereButtonClick = () => {
    console.log("How to get there button clicked");
  };

  return (
    <div className={styles.background} id="location">
      <div className={styles.content}>
        <>
          <h1 className={styles.title}>{Strings.EventLocationTitle}</h1>
          <p className={styles.description}>{Strings.EventLocationAddress}</p>
          <div className={styles.buttonContainer}>
            <Button text={Strings.EventLocationButtonName} onClick={handleHowToGetThereButtonClick} styleType="primary" />
          </div>
        </>
        <div className={styles.imageContainer}>
          <Image
            src={Images.eventLocationMap.src}
            alt={Images.eventLocationMap.imageAlt}
            style={{ objectFit: 'cover' }}
          // fill
          />
        </div>
      </div>
    </div>
  )
}