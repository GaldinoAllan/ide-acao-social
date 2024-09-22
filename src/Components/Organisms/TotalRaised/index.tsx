"use client";

import { useState, useEffect } from 'react';
import styles from "./styles.module.scss"
import { Strings } from '../../../Helpers/Strings';

export const TotalRaised = () => {
  const [progress, setProgress] = useState(0);
  const [totalRaised, setTotalRaised] = useState(0);
  const [goal, setGoal] = useState(0);
  const percentageProgress = `${progress.toFixed(2)}%`
  const totalRaisedString = `Arrecadado: R$ ${totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
  const goalString = `Meta: R$ ${goal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Strings.GoogleApiUrlPath);
        const data = await response.json();

        const totalRaised = data.totalRaised.replace(/[R$\s]/g, '')
          .replace(/\./g, '')
          .replace(/,/g, '.');

        const goal = data.goal.replace(/[R$\s]/g, '')
          .replace(/\./g, '')
          .replace(/,/g, '.');

        setGoal(Number(goal));
        setTotalRaised(Number(totalRaised));
        setProgress((Number(totalRaised) / goal) * 100);
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