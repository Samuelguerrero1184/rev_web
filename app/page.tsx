import React, { useEffect, useRef, useState } from "react";
import styles from "./home.module.css"; // Adjust the path as necessary
import "./globals.css";
import ServiceCard from "@/components/ServiceCard";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="">
      <div className={styles.slogan}>
        <h1 className={styles.mainH1}>
          Building Your Dreams Into <br />
          <span className={styles.mainH1}>Reality</span>
        </h1>
      </div>
      <div className={styles.secondPane}>
        <div className={styles.services}>
          <h3 className={styles.servicesH3}>Services</h3>
          <h2 className={styles.servicesH2}>This is what we do</h2>
        </div>
        <div className={styles.cards}>
          <ServiceCard
            title="Design and Construction"
            description=""
            features={["Luxury Residences", "Commercial Projects"]}
            imageUrl="/luxury.jpg"
          />
          <ServiceCard
            title="Renovation and Remodeling"
            description=""
            features={["Repairs and Remodeling", "Demolition Services"]}
            imageUrl="/comercial.jpg"
          />
          <ServiceCard
            title="Specialized Services"
            description=""
            features={[
              "Project Coordination",
              "Project Feasibility Evaluation",
            ]}
            imageUrl="/hotel.jpg"
          />
          <ServiceCard
            title="Hospitality Solutions"
            description=""
            features={["Hospitality Projects"]}
            imageUrl="/hotel.jpg"
          />
        </div>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
      </div>
      <div className={styles.thirdPane}>
        <div className={styles.services}>
          <div className={styles.secondPane}>
            <div className={styles.services}>
              <h3 className="text-white">About</h3>
              <h2 className="text-white">This is who we are</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
