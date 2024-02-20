import React from "react";
import styles from "@/app/css/csr_section1.module.css";
import Image from "next/image";
import img from "@/public/headerImg.png";

const Section1 = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imgcont}>
          <Image
            className={styles.img}
            src={img}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.h1}>Partner with us</h1>
          <p className={styles.p}>
            Bharat Shakti Foundation Empowering the new Bharat through quality
            education, mentorship, and healthcare. We save lives, support young
            entrepreneurs, provide free food, and combat illiteracy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
