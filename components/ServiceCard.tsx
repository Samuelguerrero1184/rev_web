'use client'; 

import React from 'react';
import Image from 'next/image';
import styles from './components.module.css';

// Define the type for the component's props
interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    imageUrl: string;
}

// Functional component
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, imageUrl }) => {

    // Function to handle the click event
    const handleServiceClick = () => {
        console.log(`Service card clicked: ${title}`);
    }

    return (
        <div className={styles.serviceCard} onClick={handleServiceClick}>
            <Image 
                src={imageUrl} 
                alt="cardImg" 
                className={styles.cardImage} 
                width={500} 
                height={500} 
            />
            <div className={styles.cardContent}>
                <h1 className={styles.titleWrap}>{title}</h1>
                <p>{description}</p>
                <ul className={styles.featureList}>
                    {features.map(feature => (
                        <li key={feature} className='text-md'>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServiceCard;