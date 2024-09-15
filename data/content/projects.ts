import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "JournalForge",
    desc: "Create your journals with an automated platform",
    img: "https://aswathcm.sirv.com/Journal.png",
    link: "https://journal-forge.vercel.app/",
    github: "https://github.com/aswathcm29/webathon-journal",
    tags: ["React","TailwindCSS", "NodeJS","Express","Groq"],
  },
  {
    id: 1,
    title: "Effitrack",
    desc: "Track your personalised tech portfolio",
    img: "https://aswathcm.sirv.com/Effitrack.png",
    link: "https://effitrack.vercel.app/",
    tags: ["React", "TailwindCSS", "Redux", "NodeJS","ExpressJS"],
  },
  {
    id: 2,
    title: "Leetcode Roaster",
    desc: "Get your leetcode profile roasted",
    img: "https://aswathcm.sirv.com/LeetcodeRoaster.png",
    link: "https://aswathcm.sirv.com/LeetcodeRoaster.png",
    github: "https://github.com/TherkuTech/Leetcode-Roaster-Frontend",
    tags: ["React","TailwindCSS", "NodeJS","Express","Groq"],
  },
  {
    id: 3,
    title: "Feedworks",
    desc: "Get your feedbacks provide actionable insights with AI",
    img: "https://aswathcm.sirv.com/Feedworks.png",
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
