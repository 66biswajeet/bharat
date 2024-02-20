import styles from "@/app/css/csr_section4.module.css";
import { VscPass } from "react-icons/vsc";

const Section4 = () => {
  return (
    <div className={styles.grand_parent}>
      <div className={styles.parent}>
        <h1 className={styles.h1}>
          Our <span className={styles.span}>Upcoming Projects</span>
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
              <VscPass />
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
            {" "}
            <VscPass />
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
            <VscPass />
            Empower360: Women's Holistic Education & Empowerment -
          </h2>
          <p className={styles.p2}>
            "Empower360 focuses on holistic women's education, covering
            financial management,essential child-teaching skills. Our initiative
            aims to empower women for economic independence, health wellness,
            and nurturing family growth."
          </p>
        </div>

        <div className={styles.child}>
          <h2 className={styles.h2}>
            <VscPass />
            Scholar's Haven: Empowering Education Essentials -
          </h2>
          <p className={styles.p2}>
            "To empower children with essential educational tools and resources,
            including school kits (bags, books, pens), scholarships,
            establishing mini-libraries in schools, and providing personalized
            tuition to enhance learning outcomes."
          </p>
        </div>

        <div className={styles.child}>
          <h2 className={styles.h2}>
            <VscPass />
            Future Innovators: Coding & Space Science Mastery -
          </h2>
          <p className={styles.p2}>
            "To empower students with advanced skills in coding, robotics, and
            space science, preparing them for future careers as scientists,
            innovators, and creators. Our initiative aims to ignite passion,
            foster creativity, and cultivate the next generation of leaders in
            STEM fields."
          </p>
        </div>

        <div className={styles.child}>
          <h2 className={styles.h2}>
            <VscPass />
            Program Name: Rural Innovators Initiative -
          </h2>
          <p className={styles.p2}>
            The Rural Innovators Initiative is a comprehensive program aimed at
            empowering and supporting talented rural students with innovative
            ideas to transform their concepts into viable startups. The goal is
            to bridge the gap between potential and opportunity, fostering
            innovation and sustainable development in rural communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
