import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

import ResumePDF from '../../assets/Happi_CV.pdf'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            const timer = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
            return () => clearTimeout(timer)
        }, [])

    return (
          <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
               />
            </h1>
            <p>
              I am an <strong>AI Builder</strong>, <strong>LLM & Automation Developer</strong>, and <strong>Full-Stack Engineer</strong> with hands-on experience shipping production-grade applications from API integration to cloud deployment.
            </p>
            <p>
              Fluent across <strong>Python</strong>, <strong>JavaScript / TypeScript</strong>, <strong>FastAPI</strong>, and <strong>React / Next.js</strong>, I specialize in wiring APIs, databases, and AI models into high-performance, real-world tools.
            </p>
            <p>
              My background covers dialogue/agent systems, NLP pipelines, full-stack PWAs with offline architecture, and secure database design.
            </p>
            <div style={{ marginTop: '25px' }}>
              <a href={ResumePDF} download="Happi_Resume.pdf" className="flat-button">DOWNLOAD CV</a>
            </div>
          </div>

          <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
          </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}


export default About