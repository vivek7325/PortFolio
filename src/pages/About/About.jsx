import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../components/portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about_name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about_role'>A {role}</h2>}  

      <p className='about_desc'>{description && description}</p>

      <div className='about_contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}

      </div>

    </div>
  );
}

export default About