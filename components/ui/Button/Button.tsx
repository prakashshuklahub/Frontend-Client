import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`${styles[variant]} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
