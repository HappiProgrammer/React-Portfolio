import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const projects = [
        {
            title: 'Ubuntu Health',
            description: 'Full-stack geriatric care platform connecting families with daycare centers, caregivers, and community healthcare.',
            tags: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase'],
            github: 'https://github.com/HappiProgrammer/Ubuntu_Health',
            demo: 'https://ubuntu-health-sepia.vercel.app',
            loaderType: 'pacman',
            accent: 'linear-gradient(135deg, #0d3b66 0%, #001e2d 100%)'
        },
        {
            title: 'Hospital Medications & Peptides',
            description: 'Institutional peptide research e-commerce platform with batch COA verification, dynamic catalog, and cart flows.',
            tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
            github: 'https://github.com/HappiProgrammer/Site-for-hospital-medications',
            demo: 'https://site-for-hospital-medications.vercel.app',
            loaderType: 'ball-clip-rotate-multiple',
            accent: 'linear-gradient(135deg, #115173 0%, #022c43 100%)'
        },
        {
            title: 'Corporate Enterprise Platform',
            description: 'Performance-driven corporate website built with clean architecture, modern UI components, and fast response times.',
            tags: ['TypeScript', 'React', 'Clean Arch', 'UI/UX'],
            github: 'https://github.com/HappiProgrammer/Cooporate_Website',
            demo: 'https://cooporate-website.vercel.app',
            loaderType: 'cube-transition',
            accent: 'linear-gradient(135deg, #05386b 0%, #021e30 100%)'
        },
        {
            title: 'Flutter Banking App',
            description: 'Cross-platform mobile banking application built with Flutter & Dart featuring account tracking and transaction management.',
            tags: ['Flutter', 'Dart', 'Mobile', 'FinTech'],
            github: 'https://github.com/HappiProgrammer/Flutter_app',
            demo: 'https://flutter-app-henna.vercel.app',
            loaderType: 'line-scale',
            accent: 'linear-gradient(135deg, #023e8a 0%, #03045e 100%)'
        },
        {
            title: 'Green Haven Nature Portal',
            description: 'Environmental platform promoting ecological upkeep, soil conservation, and biodiversity preservation.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
            github: 'https://github.com/HappiProgrammer/Green-Haven',
            demo: 'https://green-haven-eosin.vercel.app',
            loaderType: 'ball-scale-ripple-multiple',
            accent: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)'
        },
        {
            title: 'CEC 315 AI Model & Chatbot',
            description: 'Conversational AI chatbot model with FastAPI backend endpoints for automated queries and language processing.',
            tags: ['Python', 'FastAPI', 'AI Chatbot', 'NLP'],
            github: 'https://github.com/HappiProgrammer/CEC315AIMODEL',
            demo: 'https://github.com/HappiProgrammer/cec-315-backend',
            loaderType: 'ball-triangle-trace',
            accent: 'linear-gradient(135deg, #3a0ca3 0%, #10002b 100%)'
        },
        {
            title: 'Developer Portfolio',
            description: 'Interactive developer portfolio with custom GSAP 3D SVG stroke drawing animations and responsive typography.',
            tags: ['React', 'GSAP', 'SCSS', '3D Vector'],
            github: 'https://github.com/HappiProgrammer/React-Portfolio',
            demo: 'https://react-portfolio-seven-lovat.vercel.app',
            loaderType: 'ball-spin-fade-loader',
            accent: 'linear-gradient(135deg, #022c43 0%, #115173 100%)'
        },
        {
            title: 'Vehicle Marketplace',
            description: 'Automobile listing web application showcasing vehicle specs, comparisons, and technical details.',
            tags: ['JavaScript', 'HTML5', 'CSS3', 'Automotive'],
            github: 'https://github.com/HappiProgrammer/vehicle-marketplace',
            demo: 'https://github.com/HappiProgrammer/Wheels-',
            loaderType: 'ball-grid-pulse',
            accent: 'linear-gradient(135deg, #1f2421 0%, #0d1317 100%)'
        }
    ]

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
                        idx={15}
                    />
                </h1>

                <div className="images-container">
                    {projects.map((project, idx) => (
                        <div 
                            className="image-box" 
                            key={idx} 
                            style={{ 
                                animationDelay: `${idx * 0.1}s`,
                                background: project.accent 
                            }}
                        >
                            {/* Animated loader visible by default, disappears on hover */}
                            <div className="card-loader-wrapper">
                                <Loader type={project.loaderType} active={true} />
                                <span className="loader-label">RUNNING</span>
                            </div>

                            {/* Initial summary card banner */}
                            <div className="card-header-banner">
                                <span className="project-idx">0{idx + 1}</span>
                                <h3 className="card-title-preview">{project.title}</h3>
                            </div>

                            {/* Hover overlay content with full details & action buttons */}
                            <div className="content">
                                <h2 className="title">{project.title}</h2>
                                <p className="description">{project.description}</p>
                                <div className="tags-row">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="tag-pill">{tag}</span>
                                    ))}
                                </div>
                                <div className="btn-row">
                                    {project.demo && project.demo !== '#' && (
                                        <button 
                                            className="btn btn-demo" 
                                            onClick={() => window.open(project.demo, '_blank')}
                                        >
                                            <FontAwesomeIcon icon={faExternalLinkAlt} /> LIVE DEMO
                                        </button>
                                    )}
                                    {project.github && (
                                        <button 
                                            className="btn btn-code" 
                                            onClick={() => window.open(project.github, '_blank')}
                                        >
                                            <FontAwesomeIcon icon={faGithub} /> CODE
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio
