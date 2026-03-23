import React from 'react'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

const skills = [
  {
    name: "Javasript",
    icon: <SiJavascript/>,
    percentage: 89,
  },

  {
    name: "React.js",
    icon: <SiReact/>,
    percentage: 89,
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs/>,
    percentage: 89,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript/>,
    percentage: 89,
  },

]
const Skills = () => {
  return (
    <div>Skills</div>
  )
}

export default Skills