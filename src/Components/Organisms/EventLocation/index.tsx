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
    <div className={styles.background} id="local">
      <div className={styles.content}>
        <>
          <h1 className={styles.title}>{Strings.EventLocationTitle}</h1>
          <p className={styles.description}>{Strings.EventLocationAddress}</p>
          <p className={styles.description}>{Strings.EventLocationDate}</p>
          <a href={Strings.EventLocationGoogleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.buttonContainer}>
            <Button text={Strings.EventLocationButtonName} onClick={handleHowToGetThereButtonClick} styleType="primary" />
          </a>
        </>
        <div className={styles.imageContainer}>
          <Image
            src={Images.eventLocationMap.src}
            alt={Images.eventLocationMap.imageAlt}
            style={{ width: '50%', height: "50%", objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}