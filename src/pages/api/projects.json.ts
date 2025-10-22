import type { APIRoute } from 'astro';
import { getAllCategories, getAllProjects, getCategoryStats } from '../../utils/projectUtils';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({
    categories: getAllCategories(),
    projects: getAllProjects(),
    stats: getCategoryStats()
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
