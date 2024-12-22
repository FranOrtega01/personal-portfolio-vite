import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';
import { Github } from 'lucide-react';


export const ProjectsContainer = ({ projects }) => {
    return (
        <div className='projectsContainer'>
            {projects.map(p =>
                <div className='project glass shadow'>
                    <img src={p.image} alt={p.title} />
                    <div className='projectContent'>
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                        <div className='technologies'>
                            {p.technologies.map(t => <span>{t}</span>)}
                        </div>
                        <div className='projectLinks'>
                            <div>
                                <SquareArrowOutUpRight size={16} />
                                <a href="">Demo</a>
                            </div>
                            <div>
                                <Github size={16} />
                                <a href="">Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
