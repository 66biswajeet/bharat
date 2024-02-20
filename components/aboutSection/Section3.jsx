import styles from "@/app/css/about_section3.module.css";
import Image from "next/image";
import headerImg from "@/public/headerImg1.png";
import heroImage1 from "@/public/hero1234.png";

const Section3 = () => {
  const menuItems = [
    {
      name: "Biswajeet",
      position: "Full Stack Developer",
      description:
        "Meet Biswajeet, our skilled web developer with over 1 year of experience. He is the creative mind behind the captivating front-end of the Bharat Shakti Foundation website, showcasing his talent for innovative and user-friendly design",

      img: heroImage1,
    },
    {
      name: "Raj",
      position: "Full Stack Developer",
      description:
        "Meet Biswajeet, our skilled web developer with over 1 year of experience. He is the creative mind behind the captivating front-end of the Bharat Shakti Foundation website, showcasing his talent for innovative and user-friendly design",

      img: heroImage1,
    },
    {
      name: "Biswajeet",
      position: "Full Stack Developer",
      description: "he is a well experienced full stack developer",
      img: heroImage1,
    },
    {
      name: "Biswajeet",
      position: "Full Stack Developer",
      description: "he is a well experienced full stack developer",
      img: heroImage1,
    },
  ];
  return (
    <div className={styles.grand_parent}>
      <div className={styles.parent}>
        <h1 className={styles.h1}>
          OUR <span className={styles.span}> TEAM</span>
        </h1>
        <p className={styles.p}>
          " <span className={styles.span}>Winning</span> with heart for the
          hourly workforce"
        </p>
      </div>
      <div className={styles.teamMemberCard}>
        {menuItems.map((item) => (
          <div className={styles.cardContainer}>
            {/* <img className={styles.memberImage} src={member1} alt="team member" /> */}
            <Image
              className={styles.memberImage}
              src={item.img}
              width={200}
              height={200}
              alt="Picture of the author"
            />
            <div className={styles.memberInfo}>
              <h1 className={styles.memberName}>{item.name}</h1>
              <h2 className={styles.memberPosition}>{item.position}</h2>
              <p className={styles.memberDescription}>{item.description}</p>
              <div className={styles.socialLinks}>{}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
