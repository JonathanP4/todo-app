import Image from "next/image";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className="absolute -z-10 h-full dark:bg-dark-700">
      <Image
        width={1440}
        height={300}
        loading="lazy"
        src={"/images/bg-desktop-dark.jpg"}
        alt="bg"
      />
    </div>
  );
}
