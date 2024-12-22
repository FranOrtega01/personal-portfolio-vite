import React, { useState, useEffect } from 'react'
import "./Projects.scss"
import { realProjects } from '../../projects';
import { universityProjects } from '../../projects';
import { ProjectsContainer } from './ProjectsContainer';

export const Projects = () => {
    const [real, setReal] = useState(true);

    return (
        <section id="Projects">
            <div className='projectsControls glass shadow'>
                <div onClick={() => setReal(true)}>
                    <p className={real ? "active" : ""}>Real Projects</p>
                </div>
                <div onClick={() => setReal(false)}>
                    <p className={!real ? "active" : ""}>University Projects</p>
                </div>
            </div>
            <ProjectsContainer projects={real ? realProjects : universityProjects } />
        </section>
    )
}
