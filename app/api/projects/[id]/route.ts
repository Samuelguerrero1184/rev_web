import { NextRequest, NextResponse } from 'next/server';
import { projects } from '../../../../data/projects';  // Import the shared project data

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);  // Convert the id to a number

  // Find the project by id
  const project = projects.find((p) => p.id === id);

  // If project not found, return a 404 response
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  // Return the found project as JSON
  return NextResponse.json(project);
}
