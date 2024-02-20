import styles from "@/app/css/csr_section3.module.css";
import Image from "next/image";
import img from "@/public/mission.jpg";

const Section3 = () => {
  return (
    <div className={styles.grand_parent}>
      <div className={styles.parent}>
        <div className={styles.child1}>
          <h1 className={styles.h1}>
            Our <span className={styles.span}>Mission</span>
          </h1>
          <p className={styles.p}>
            Bharat Shakti's mission is to shape a new India, providing
            opportunities for young minds to achieve their dreams. We aspire to
            build a safe, growing, and healthy nation. Join us in creating a
            brighter future for Bharat, where every youth's mission finds
            support and fulfillment.
          </p>
        </div>
        <div className={styles.child1}>
          <h1 className={styles.h1}>
            Our <span className={styles.span}>Vission</span>
          </h1>
          <p className={styles.p}>
            Everyone has dreams, and we pave the path to turn those dreams into
            reality. Our vision is simple yet powerful: to empower dreamers.
            With quality support and guidance, we transform aspirations into
            achievements, creating a brighter and fulfilled future for all.
          </p>
        </div>
      </div>

      <div className={styles.parent2}>
        <Image
          className={styles.img}
          src={img}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Section3;
