import styles from "@/app/css/Howitwork.module.css";
import Section1 from "@/components/howitwork/Section1";

const page = () => {
  return (
    <div className={styles.grand_parent}>
      <div className={styles.parent}>
        <h1 className={styles.h1}>
          how <span className={styles.hs}>it works</span>
        </h1>
        {/* <ul className={styles.ul}>
          <li>
            <span className={styles.span}>Start A Campaign</span>
          </li>
          <li>
            <span className={styles.span}>Set Up Campaign</span>
          </li>
          <li>
            <span className={styles.span}>Campaign Page Liven</span>
          </li>
          <li>
            <span className={styles.span}>Funds Raised</span>
          </li>
        </ul> */}

        <p className={styles.p}>
          Join the Healthcare Revolution in India: Empowering You with
          Easy-to-Use Services for a Healthier Future.
        </p>

        <div className={styles.btn}>Start fund raising</div>
      </div>
      <Section1 />
    </div>
  );
};

export default page;
