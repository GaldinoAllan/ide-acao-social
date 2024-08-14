import { Strings } from "../../../Helpers/Strings"
import styles from "./styles.module.scss"

export const AboutEvent = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <h1 className={styles.title}>{Strings.AboutUsTitle}</h1>
        <p className={styles.description}>{Strings.AboutUsDescription}</p>
      </div>
    </div>
  )
}