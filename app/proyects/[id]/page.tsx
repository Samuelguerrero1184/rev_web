// /app/projects/[id]/page.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
}

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;  // Extract the id from the URL
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the project details based on the id
      fetch(`/api/projects/${id}`)
        .then((response) => response.json())
        .then((data) => setProject(data))
        .catch((error) => console.error('Error fetching project:', error));
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.location}</p>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetailPage;
