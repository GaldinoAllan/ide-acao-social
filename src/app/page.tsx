import { AboutEvent } from "../Components/Organisms/AboutEvent";
import { Main } from "../Components/Organisms/Main";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.components}>
        <Main />
        <AboutEvent />
      </div>
    </main>
  );
}
