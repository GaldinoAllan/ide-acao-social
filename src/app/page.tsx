import { Header } from "../Components/Organisms/Header";
import { Main } from "../Components/Organisms/Main";
import { AboutEvent } from "../Components/Organisms/AboutEvent";
import { HowToHelp } from "../Components/Organisms/HowToHelp";
import { Footer } from "../Components/Organisms/Footer";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Main />
        <AboutEvent />
        <HowToHelp />
        <Footer />
      </div>
    </main>
  );
}
