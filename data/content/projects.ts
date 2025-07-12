import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
  id: 0,
  title: "GDG-Sync",
  desc: "An event management platform for campus Google Developer Groups, featuring role-based access for admins and users, with event booking, caching, and admin management.",
  img: "https://aswathcm.sirv.com/GDG-SYNC.png",
  github: "https://github.com/aswathcm29/Gdg-sync",
  link: "https://gdg-sync.vercel.app/",
  tags: ["React", "Redux", "NodeJS", "Express", "MongoDB", "Redis", "Docker"],
  },
  {
    id: 1,
    title: "JournalForge",
    desc: "Create your journals with an automated platform",
    img: "https://aswathcm.sirv.com/Journal.png",
    link: "https://journal-forge.vercel.app/",
    github: "https://github.com/aswathcm29/webathon-journal",
    tags: ["React","TailwindCSS", "NodeJS","Express","Groq"],
  },
  {
    id: 2,
    title: "Effitrack",
    desc: "Track your personalised tech portfolio",
    img: "https://aswathcm.sirv.com/Effitrack.png",
    link: "https://effitrack.vercel.app/",
    tags: ["React", "TailwindCSS", "Redux", "NodeJS","ExpressJS"],
  },
  {
    id: 3,
    title: "Leetcode Roaster",
    desc: "Get your leetcode profile roasted",
    img: "https://aswathcm.sirv.com/LeetcodeRoaster.png",
    link: "https://aswathcm.sirv.com/LeetcodeRoaster.png",
    github: "https://github.com/TherkuTech/Leetcode-Roaster-Frontend",
    tags: ["React","TailwindCSS", "NodeJS","Express","Groq"],
  },
  {
    id: 4,
    title: "Feedworks",
    desc: "Get your feedbacks provide actionable insights with AI",
    img: "https://aswathcm.sirv.com/FeedWorks.png",
    tags: ["React","TailwindCSS", "NodeJS","Express","Groq"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
