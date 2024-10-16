import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './components.module.css';  
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
    id: number;
    image: string;
    title: string;
    location: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, image, title, location }) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/projects/${id}`); // Navigate to the dynamic project page
    };

    return (
        <Card className={styles.cardSize}>
            <CardActionArea onClick={handleClick}>
                {/* Adjust Image to fit the card */}
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt="Project image"
                        layout="fill" // This makes the image fill the parent container
                        objectFit="cover" // Ensures the image covers the entire container
                        quality={100} // Optional: improves image quality
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {location}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProjectCard;
