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
    return (
        <div className={styles.serviceCard}>
            <Image 
                src={imageUrl} 
                alt="cardImg" 
                className={styles.cardImage} 
                width={250} 
                height={250} 
            />
            <div className={styles.cardContent}>
                <h3 className='text-xl font-bold'>{title}</h3>
                <p>{description}</p>
                <ul>
                    {features.map(feature => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ServiceCard;