import { NextResponse } from 'next/server';
import { projects } from '../../../data/projects';  // Import the shared project data

export async function GET() {
  return NextResponse.json(projects); // Return the static projects array as JSON
}
