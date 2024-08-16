import { AboutEvent } from "../Components/Organisms/AboutEvent";
import Footer from "../Components/Organisms/Footer";
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
        <Footer />
      </div>
    </main>
  );
}
