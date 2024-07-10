import { Logo } from "@/components";
import { LoginForm } from "./_components";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div className={styles.pagebox}>
      <Logo />
      <LoginForm />
    </div>
  );
}
