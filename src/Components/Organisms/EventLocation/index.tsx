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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.6474603634056!2d-47.02344932393286!3d-22.926370538572705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cef7be766c39%3A0xaba3ee2c93736ddf!2sR.%20Hermantino%20Prado%2C%20301%20-%20Jardim%20Carlos%20Louren%C3%A7o%2C%20Campinas%20-%20SP%2C%2013101-107!5e0!3m2!1spt-BR!2sbr!4v1729185028523!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border: 0, marginTop: 30}} loading="lazy" ></iframe>
      </div>
    </div>
  )
}