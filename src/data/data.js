import React from 'react'

// react icons
import { FiGrid, FiLinkedin } from 'react-icons/fi'
import { AiFillLock } from "react-icons/ai";
import { VscProject } from 'react-icons/vsc'
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
} from 'react-icons/bs'
import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiJest,
  SiPostman,
  SiTailwindcss,
  SiRedux,
  SiStorybook,
  SiBitbucket,
  SiJsonwebtokens,
} from 'react-icons/si'

import { GrGithub } from 'react-icons/gr'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaNodeJs, FaGit, FaReact, FaProjectDiagram, FaUserShield, FaVial, FaRobot } from 'react-icons/fa'
import { MdHttp, MdSettingsRemote } from 'react-icons/md'

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'Home',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'About',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/about',
  },
  {
    text: 'Projects',
    icon: <VscProject className="link-icon" />,
    url: '/project',
  },
  {
    text: 'Contacts',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contact',
  },
]
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/shive198triv54i',
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/shivesh-trivedi/',
  },
]
// programming languages and technologies (spanText), icons and url
const skillSet = [
  // Languages
  {
    icon: <SiCsharp className="skills-icon switch__color" />,
    spanText: 'C#',
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JAVASCRIPT',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
  },
  {
    icon: <SiTypescript className="skills-icon switch__color" />,
    spanText: 'TYPESCRIPT',
    url: 'https://www.typescriptlang.org/',
  },
  
  // Backend
  {
    icon: <SiDotnet className="skills-icon switch__color" />,
    spanText: '.NET 8',
    url: 'https://dotnet.microsoft.com/',
  },
  {
    icon: <SiDotnet className="skills-icon switch__color" />,
    spanText: 'ASP.NET CORE',
    url: 'https://docs.microsoft.com/en-us/aspnet/core/',
  },
  {
    icon: <SiDotnet className="skills-icon switch__color" />,
    spanText: 'ENTITY FRAMEWORK',
    url: 'https://docs.microsoft.com/en-us/ef/',
  },
  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE.JS',
    url: 'https://nodejs.org/',
  },
  {
    icon: <MdHttp className="skills-icon switch__color" />,
    spanText: 'REST APIs',
    url: 'https://restfulapi.net/',
  },
  {
    icon: <MdSettingsRemote className="skills-icon switch__color" />,
    spanText: 'gRPC',
    url: 'https://grpc.io/',
  },
  {
    icon: <FaProjectDiagram className="skills-icon switch__color" />,
    spanText: 'MICROSERVICES',
    url: 'https://microservices.io/',
  },
  
  // Frontend
  {
    icon: <FaReact className="skills-icon switch__color" />,
    spanText: 'REACT.JS',
    url: 'https://reactjs.org/',
  },
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: 'REDUX',
    url: 'https://redux.js.org/',
  },
  {
    icon: <SiTailwindcss className="skills-icon switch__color" />,
    spanText: 'TAILWIND CSS',
    url: 'https://tailwindcss.com/',
  },
  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
    url: 'https://getbootstrap.com/',
  },
  {
    icon: <FaReact className="skills-icon switch__color" />,
    spanText: 'REACT ROUTER',
    url: 'https://reactrouter.com/',
  },
  {
    icon: <FaReact className="skills-icon switch__color" />,
    spanText: 'REACT QUERY',
    url: 'https://tanstack.com/query/',
  },
  {
    icon: <SiStorybook className="skills-icon switch__color" />,
    spanText: 'STORYBOOK',
    url: 'https://storybook.js.org/',
  },
  
  // Databases
  {
    icon: <SiMicrosoftsqlserver className="skills-icon switch__color" />,
    spanText: 'SQL SERVER',
    url: 'https://www.microsoft.com/en-us/sql-server',
  },
  {
    icon: <SiMysql className="skills-icon switch__color" />,
    spanText: 'MYSQL',
    url: 'https://www.mysql.com/',
  },
  {
    icon: <SiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGODB',
    url: 'https://www.mongodb.com/',
  },
  
  // DevOps / CI-CD
  {
    icon: <SiDocker className="skills-icon switch__color" />,
    spanText: 'DOCKER',
    url: 'https://www.docker.com/',
  },
  {
    icon: <GrGithub className="skills-icon switch__color" />,
    spanText: 'GITHUB ACTIONS',
    url: 'https://github.com/features/actions',
  },
  {
    icon: <FaGit className="skills-icon switch__color" />,
    spanText: 'GIT',
    url: 'https://git-scm.com/',
  },
  {
    icon: <SiBitbucket className="skills-icon switch__color" />,
    spanText: 'BITBUCKET',
    url: 'https://bitbucket.org/',
  },
  
  // Testing
  {
    icon: <FaVial className="skills-icon switch__color" />,
    spanText: 'xUNIT',
    url: 'https://xunit.net/',
  },
  {
    icon: <FaRobot className="skills-icon switch__color" />,
    spanText: 'MOQ',
    url: 'https://github.com/moq/moq4',
  },
  {
    icon: <SiJest className="skills-icon switch__color" />,
    spanText: 'JEST',
    url: 'https://jestjs.io/',
  },
  {
    icon: <FaReact className="skills-icon switch__color" />,
    spanText: 'REACT TESTING LIBRARY',
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
  },
  {
    icon: <SiPostman className="skills-icon switch__color" />,
    spanText: 'POSTMAN',
    url: 'https://www.postman.com/',
  },
  
  // Security
  {
    icon: <SiJsonwebtokens className="skills-icon switch__color" />,
    spanText: 'JWT',
    url: 'https://jwt.io/',
  },
  {
    icon: <AiFillLock className="skills-icon switch__color" />,
    spanText: 'OAUTH2',
    url: 'https://oauth.net/2/',
  },
  {
    icon: <FaUserShield className="skills-icon switch__color" />,
    spanText: 'RBAC',
    url: 'https://en.wikipedia.org/wiki/Role-based_access_control',
  },
]

export { sideBarMenu, socialIcons, skillSet }

