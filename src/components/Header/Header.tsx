import { ReactNode } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={`${styles.header}`}>
      {children}
    </header>
  );
}
