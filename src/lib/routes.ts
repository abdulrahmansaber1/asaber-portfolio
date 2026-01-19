export const routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
  experience: "/experience",
  workTogether: "/contact",
  cv: "/cv",
  backendProject: (slug: string) => `/projects/back-end/${slug}`,
  frontendProject: (slug: string) => `/projects/front-end/${slug}`,
  aiProject: (slug: string) => `/projects/ai/${slug}`,
  othersProject: (slug: string) => `/projects/others/${slug}`,
}
