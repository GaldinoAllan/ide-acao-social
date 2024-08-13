"use client";

import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  text: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  icon: Icon,
  onClick,
  type = 'button',
  styleType = 'primary',
  disabled = false
}) => {
  return (
    <button
      className={`${styles.button_container} ${styles[styleType]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {Icon && <Icon className={styles.button_icon} />}
      <span className={styles.button_text}>{text}</span>
    </button>
  );
};
