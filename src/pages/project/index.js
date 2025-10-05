import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  gpt3,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'GPT Project',
    desc: 'AI-powered application with modern UI interface and advanced functionality',
    stack: 'React JS',
    imgUrl: gpt3,
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/shive198triv54i/gpt',
    },
    website: {

    },
  },
  {
    id: 2,
    name: 'Headphone-Mania',
    desc: 'A comprehensive task management application built with React for efficient project organization',
    stack: 'React JS',
    imgUrl: 'https://cdn.mos.cms.futurecdn.net/HMCWShKerkfeNQmYYhE3p7.jpg',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/shive198triv54i/e-commerce',
    },
    website: {
      
    },
  },
  {
    id: 3,
    name: 'ShopEase - E-Commerce Platform',
    desc: 'Full-stack e-commerce platform with JWT authentication, role-based access, and secure payments. Built 25+ reusable React components integrated with .NET APIs, reducing development effort by 35%. Optimized SQL queries and implemented EF Core migrations, reducing checkout response times by 30%.',
    stack: 'React, TypeScript, .NET 8, SQL Server, JWT, Razorpay, Docker',
    imgUrl: 'https://play-lh.googleusercontent.com/QGrAyCWOD1y8YfSLde7FRDSIadKaMVWpKn-hgxNzs4UT4g9Bz1I0DblRkLdMUJ8gdlGs',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/shive198triv54i/shopease',
    },
    website: {
     
    },
  },
  {
    id: 4,
    name: 'Bharat Yatra - Travel Booking Platform',
    desc: 'Travel booking platform with REST APIs built using Node.js and JWT authentication for 500+ users. Responsive booking interface with React + Tailwind, cutting page load time by 25%. Implemented role-based access (Admin, Vendor, User), reducing unauthorized access by 40%.',
    stack: 'React, Node.js, MongoDB, Firebase, Tailwind',
    imgUrl: 'https://www.jagritiyatra.com/assets/img/JY2025Map.png',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/shive198triv54i/Tourism',
    },
    website: {
     
    },
  },
]
