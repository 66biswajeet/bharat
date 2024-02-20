import headerImg from "@/public/headerImg1.png";
import Link from "next/link";
import styles from "@/app/css/about.module.css";
import Image from "next/image";
import Section2 from "@/components/aboutSection/Section2";
import Section3 from "@/components/aboutSection/Section3";

const page = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={headerImg}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              Bharat Shakti
              <br />
              Tech, <span className={styles.charity}>Charity</span>, Impact
            </h1>
            <p className={styles.description}>
              Our mission at Bharat Shakti is clear: to provide equal access to
              technology solutions for NGOs and donors. We aspire to create a
              vibrant NGO community where everyone comes together, joining hands
              to elevate each other, raise donations for worthy causes, and
              collectively contribute to building a better life for those in
              need.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="/donate">
                <button className={styles.joinMissionButton}>
                  Join our mission
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.clip}></div>
      <Section2 />
      <Section3 />
    </>
  );
};

export default page;
