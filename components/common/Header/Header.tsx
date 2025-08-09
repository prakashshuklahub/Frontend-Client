import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import styles from "./Header.module.scss";
import Button from "@/components/ui/Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="https://cdn.imago-images.com/Images/Logo/IMAGO-Primary_Logos-RGB-BLACK-noPadding.svg"
        alt="Logo"
        width={70}
        height={70}
      />
      <nav className={styles.rightSection}>
        <Button variant="primary">Login</Button>
        <button className={styles.cart} type="button">
          <IoCartOutline size={30} />
        </button>
      </nav>
    </header>
  );
}
