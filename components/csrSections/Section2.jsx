import styles from "@/app/css/csr_section2.module.css";
import { FaGraduationCap } from "react-icons/fa6";
import { IoLeaf } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { FaBookOpenReader } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className={styles.grand_parent}>
      <div className={styles.parent}>
        <h1 className={styles.h1}>
          What <span className={styles.span}>We DO</span>
        </h1>
      </div>
      <div className={styles.btn_grand}>
        <div className={styles.btn_parent}>
          <FaGraduationCap />
          <button className={styles.btn}> Education</button>
        </div>
        <div className={styles.btn_parent}>
          <IoLeaf />
          <button className={styles.btn}>Women Empowerment</button>
        </div>
        <div className={styles.btn_parent}>
          <FaBookOpenReader />
          <button className={styles.btn}>Literacy</button>
        </div>
        <div className={styles.btn_parent}>
          <MdHealthAndSafety />
          <button className={styles.btn}>Health Care</button>
        </div>
        <div className={styles.btn_parent}>
          <SiCyberdefenders />
          <button className={styles.btn}>Cybersecurity</button>
        </div>
        <div className={styles.btn_parent}>
          <FaMoneyCheck />
          <button className={styles.btn}>Entreprenures</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
