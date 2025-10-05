import React from 'react'
import myCV from '../../assets/images/MyCV.pdf'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

// components
import { Cards, Blast } from '../../components'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'A',
                  'b',
                  'o',
                  'u',
                  't',
                  '',
                  '&',
                  '',
                  'S',
                  'k',
                  'i',
                  'l',
                  'l',
                  's',
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                I am Shivesh Trivedi, a Full-Stack Developer with 1.8 years of experience, 
                including a 4-month internship at Celebal Technology. I specialize in building 
                scalable, high-performance web applications using .NET 8, ASP.NET Core, C#, SQL Server, 
                React.js (TypeScript), as well as the Java ecosystem including Java, JSP, Servlets, 
                Hibernate, and Spring.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I have hands-on experience developing microservices, REST/gRPC APIs, and responsive 
                frontends, and optimizing both backend and frontend performance for enterprise-grade 
                applications. My professional journey includes migrating legacy modules to modern 
                architectures, implementing efficient API data fetching, caching, and pagination 
                strategies, and designing reusable React components that enhance UI responsiveness.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I am well-versed in SOLID principles, Repository Pattern, CI/CD pipelines with GitHub 
                Actions, Docker, and Agile workflows. I have contributed to notable projects such as 
                ShopEase, a full-stack e-commerce platform with JWT authentication, secure payments, 
                and role-based access, and Bharat Yatra, a travel booking web app with real-time 
                notifications and responsive design.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                My work emphasizes performance, maintainability, and user-centric solutions, and I am 
                passionate about leveraging modern technologies across both .NET and Java stacks to 
                deliver measurable business impact. Here's my CV below for more details.
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  )
}

export default About
