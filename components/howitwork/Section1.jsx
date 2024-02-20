import React from "react";
import styles from "@/app/css/howitwork-s2.module.css";
import Image from "next/image";
import img from "@/public/hiw.png";

const Section1 = () => {
  return (
    <div>
      <Image
        className={styles.img}
        src={img}
        width={2000}
        height={2000}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Section1;
