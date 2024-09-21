"use client";

import { useState, useEffect } from 'react';
import styles from "./styles.module.scss"
import { Strings } from '../../../Helpers/Strings';

export const TotalRaised = () => {
  const [progress, setProgress] = useState(29.945123);
  const [totalRaised, setTotalRaised] = useState(20000);
  const goal = 65000;
  const percentageProgress = `${progress.toFixed(2)}%`
  const totalRaisedString = `Arrecadado: R$ ${totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
  const goalString = `Meta: R$ ${goal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Strings.GoogleApiUrlPath);
        const data = await response.json();

        data.value = data.value.replace(/[R$\s]/g, '')
          .replace(/\./g, '')
          .replace(/,/g, '.');

        setTotalRaised(Number(data.value));
        setProgress((Number(data.value) / goal) * 100);
      } catch (error) {
        console.error('Failed to fetch progress data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.background} id="como_ajudar">
      <div className={styles.content}>
        <h1 className={styles.title}>{Strings.TotalCollectedTitle}</h1>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: percentageProgress }}
          >
            {percentageProgress}
          </div>
        </div>
        <div className={styles.totalRaisedContainer}>
          <div className={styles.totalRaised}>{totalRaisedString}</div>
          <div className={styles.totalRaised}>{goalString}</div>
        </div>
      </div>
    </div>
  );
};