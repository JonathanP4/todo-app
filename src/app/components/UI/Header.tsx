import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <header
      className={`${styles.header} text-white flex justify-between items-center w-full`}
    >
      <h1 className="font-bold text-5xl tracking-[1rem] text-white">TODO</h1>
      <Image
        width={26}
        height={26}
        src={"/images/icon-sun.svg"}
        alt="icon-sun"
      />
    </header>
  );
}
export default Header;
