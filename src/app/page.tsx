import { AboutEvent } from "../Components/Organisms/AboutEvent";
import { HowToHelp } from "../Components/Organisms/HowToHelp";
import { Main } from "../Components/Organisms/Main";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.components}>
        <Main />
        <AboutEvent />
        <HowToHelp />
      </div>
    </main>
  );
}
