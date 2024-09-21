"use client";

import { useState, useEffect } from 'react';
import styles from "./styles.module.scss"
import { Strings } from '../../../Helpers/Strings';

export const TotalCollected = () => {
  const [progress, setProgress] = useState(29.94);
  const [totalRaised, setTotalRaised] = useState(20000);
  const goal = 65000;
  const progressWidth = `${Math.min(progress, 100)}%`
  const percentageProgress = `${Math.min(progress, 100).toFixed(2)}%`
  const progressBarColor = progress > 50 ? '#76c7c0' : '#f76262'
  const totalRaisedString = totalRaised.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  const goalString = goal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  const compareGoalString = `R$ ${totalRaisedString} / ${goalString}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getProgressBarValue');
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
            style={{
              width: progressWidth,
              backgroundColor: progressBarColor,
            }}
          >
            {percentageProgress}
          </div>
        </div>

        <div className={styles.totalRaised}>{compareGoalString}</div>
      </div>
    </div>
  );
};