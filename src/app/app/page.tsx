import { Box } from "@/components/box/Box";
import Image from "next/image";
import styles from "./page.module.scss";
import { authActions, LogoutButton } from "./_components";
export default async function AppHomepage() {
  const user = await authActions.getCurrentUser();

  return (
    <div className={styles.page}>
      <Box className={styles.profile}>
        <Image width={64} height={64} src={user.image} alt="Profile picture." />
        Hi {user.firstName}!
        <LogoutButton />
      </Box>
    </div>
  );
}
