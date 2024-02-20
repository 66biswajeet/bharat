import styles from "@/app/css/about_section2.module.css";
import { MdSecurity } from "react-icons/md";
import { GiHealthPotion } from "react-icons/gi";
import { TbBulb } from "react-icons/tb";

const Section2 = () => {
  return (
    <div className={styles.grand_parent}>
      <div className={styles.parent}>
        <h1 className={styles.h1}>
          OUR <span className={styles.span}> VISSION</span>
        </h1>
        <p className={styles.p}>
          "Discover innovation in our upcoming projects – redefining excellence,
          one project at a time."
        </p>
      </div>

      <div className={styles.parent2}>
        <div className={styles.child}>
          <h2 className={styles.h2}>
            <span>
              <TbBulb className={styles.icon} />
            </span>
            Skill bharat -
          </h2>
          <p className={styles.p2}>
            "In the 'Skill Bharat' mission, we empower students with
            21st-century skills, ensuring everyone discovers the perfect skill
            and opportunity. Bridging rural and urban areas, we create a pathway
            to success, making learning accessible, relevant, and tailored for a
            brighter future."
          </p>
        </div>
        <div className={styles.child}>
          <h2 className={styles.h2}>
            <span>
              <MdSecurity className={styles.icon} />
            </span>
            Mentorship for Dreamers -
          </h2>
          <p className={styles.p2}>
            "In this mission, we offer precise mentorship and guidance to those
            aspiring to become IAS and IPS or govt exam officers, and to serve
            society. Bridging rural and urban areas, we transform dreams into
            reality, empowering individuals to fulfill their aspirations and
            contribute meaningfully to society."
          </p>
        </div>

        <div className={styles.child}>
          <h2 className={styles.h2}>
            <span>
              <GiHealthPotion className={styles.icon} />
            </span>
            Empower360: Women's Holistic Education & Empowerment -
          </h2>
          <p className={styles.p2}>
            "Empower360 focuses on holistic women's education, covering
            financial management,essential child-teaching skills. Our initiative
            aims to empower women for economic independence, health wellness,
            and nurturing family growth."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
