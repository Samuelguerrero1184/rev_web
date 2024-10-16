// /pages/about.tsx

import React from "react";
import styles from "../home.module.css";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSubSection}>
        <div className={styles.aboutTitle}>
          <h1 className={styles.aboutTitleText}>About Us</h1>
        </div>
        <div className="flex flex-col items-start justify-start h-screen">
          <div className={styles.bannerContainer}>
            <Image
              src="/banner.jpg"
              alt="About Us Image"
              layout="fill"
              className={styles.aboutBanner}
            />
          </div>
          <div className={styles.aboutText}>
            <h1 className="text-xl pt-8 pb-3">Wo We Are</h1>
            <p>
              At <span className="font-bold">REV Contractors LLC </span>, we are
              dedicated to transforming your vision into reality. With years of
              experience in the construction industry, our team specializes in
              providing high-quality contracting services for residential,
              commercial, and hospitality projects. We are passionate about
              designing and constructing spaces that inspire and stand the test
              of time.
            </p>

            <h1 className="text-xl pt-8 pb-3">Our Mision</h1>
            <p>
              Our mission is to deliver exceptional craftsmanship and innovative
              solutions for every project we undertake. Whether it&apos;s
              building luxury residences, remodeling commercial spaces, or
              executing large-scale hospitality ventures, we aim to exceed
              client expectations through excellence in every detail.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.aboutSubSection}>
        <div className={styles.aboutTitle}>
          <h1 className={styles.aboutTitleText}>About Us</h1>
        </div>
        <div className="flex flex-col items-start justify-start h-screen w-full">
          <div className={styles.bannerContainer}>
            <Image
              src="/whyUs.jpeg"
              alt="About Us Image"
              layout="fill"
              className={styles.aboutBanner}
            />
          </div>
          <div className={styles.aboutIcons}>
            <h1 className="text-xl pt-8 pb-3">Why us?</h1>
            <div className={styles.whyUsContainer}>
              <div className={styles.whyUsItem}>
                <Image
                  src="/expertise.png"
                  alt="Expertise Icon"
                  className="whyUsIcon"
                  width={70}
                  height={70}
                />
                <h3>Expertise</h3>
              </div>
              <div className={styles.whyUsItem}>
                <Image
                  src="/cuality.png"
                  alt="Customization Icon"
                  className="whyUsIcon"
                  width={70}
                  height={70}
                />
                <h3>Customization</h3>
              </div>
              <div className={styles.whyUsItem}>
                <Image
                  src="/costum.png"
                  alt="Quality Icon"
                  className="whyUsIcon"
                  width={70}
                  height={70}
                />
                <h3>Commitment to Quality</h3>
              </div>
              <div className={styles.whyUsItem}>
                <Image
                  src="/client.png"
                  alt="Client-Centered Icon"
                  className="whyUsIcon"
                  width={70}
                  height={70}
                />
                <h3>Client-Centered Approach</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
