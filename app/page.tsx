import React, { useEffect, useRef, useState } from "react";
import styles from "./home.module.css"; // Adjust the path as necessary
import "./globals.css";
import ServiceCard from "@/components/ServiceCard";
import Button from "@mui/material/Button";
import Link from "next/link";
import About from "./home/about";

export default function Home() {
  return (
    <div className={styles.container}>
      <div id="home" className={styles.section}>
        <div className={styles.slogan}>
          <h1 className={styles.mainH1}>
            Building Your Dreams Into <br />
            <span className={styles.mainH1}>Reality</span>
          </h1>
        </div>
      </div>
      <div id="services" className={styles.section}>
        <div className={styles.pane}>
          <div className={styles.services}>
            <h3 className={styles.servicesH3}>Services</h3>
            <h2 className={styles.servicesH2}>This is what we do</h2>
          </div>
          <div className={styles.cards}>
            <ServiceCard
              title="Design"
              description=""
              features={["Luxury Residences", "Commercial Projects"]}
              imageUrl="/plans.jpg"
            />
            <ServiceCard
              title="Renovation & Remodeling"
              description=""
              features={[
                "Complete Interior & Exterior Renovation Work",
                "Kitchen Remodels",
                "Bathroom Remodels",
              ]}
              imageUrl="/renovation.jpg"
            />
            <ServiceCard
              title="Construction"
              description=""
              features={[
                "Timely Project Delivery",
                "Advanced Construction Technology",
                "Comprehensive Project Management",
                "Safety Compliance",
                "Sustainable Practices",
              ]}
              imageUrl="/construction.jpg"
            />
          </div>
          <div className="w-full h-full justify-center items-center flex">
          </div>
        </div>
      </div>
      <div id="about" className={styles.section}>
        <About />
      </div>
    </div>
  );
}
