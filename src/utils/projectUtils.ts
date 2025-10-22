import projectsData from '../data/projects.json';

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
}

export interface Project {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  learnMoreUrl: string;
  donateUrl: string;
}

export interface ProjectsData {
  categories: Category[];
  projects: Project[];
}

// Get all categories
export function getAllCategories(): Category[] {
  return projectsData.categories;
}

// Get all projects
export function getAllProjects(): Project[] {
  return projectsData.projects;
}

// Get projects by category
export function getProjectsByCategory(categoryId: string): Project[] {
  return projectsData.projects.filter(project => project.categoryId === categoryId);
}

// Get category by ID
export function getCategoryById(categoryId: string): Category | undefined {
  return projectsData.categories.find(category => category.id === categoryId);
}

// Get project by ID
export function getProjectById(projectId: string): Project | undefined {
  return projectsData.projects.find(project => project.id === projectId);
}

// Get projects for carousel (one per category)
export function getCarouselProjects(): Project[] {
  const carouselProjects: Project[] = [];

  projectsData.categories.forEach(category => {
    const project = projectsData.projects.find(p => p.categoryId === category.id);
    if (project) {
      carouselProjects.push(project);
    }
  });

  return carouselProjects;
}

// Get category statistics
export function getCategoryStats() {
  const stats = projectsData.categories.map(category => {
    const projectCount = projectsData.projects.filter(p => p.categoryId === category.id).length;
    return {
      ...category,
      projectCount
    };
  });

  return stats;
}
