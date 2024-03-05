import pro1 from '../assets/Project_1.png'
import pro2 from '../assets/Project_2.png'
import pro3 from '../assets/Project_3.png'

const header = {
    // all the properties are optional - can be left empty or deleted
    // homepage: 'https://vivek7325.github.io/portfolio',
    title: 'PortFolio',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Vivek',
    role: 'Wanna Be Software Developer',
    description:
      'Aim for applying as a Software Intern to gain skills and experience to help organization to achieve their goals',
    resume: 'https://drive.google.com/file/d/1fbXfQY1O9LJDDVSatsM0pF5osBpLpdLx/view?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/vivek-prajapat-4b57911a5/',
      github: 'https://github.com/vivek7325',
    },
  }
  
  const projects = [
    // if there are no projects, Projects section won't show up
    {
      imgsrc:pro1,
      name: 'Weather App',
      description:
        'Displayed City Name, Temperature, Visibility, Weather Status, Sunset, and Sunrise Time.',
      stack: ['HTML', 'CSS','JavaScript', 'React'],
      sourceCode: 'https://github.com/vivek7325/Weather.git',
      // livePreview: 'https://github.com',
    },
    {
      imgsrc:pro2,
      name: 'Student Registration',
      description:
        'Site designed With Form Validation to prevent from empty and invalid data.',
      stack: ['HTML', 'JavaScript', 'CSS'],
      sourceCode: 'https://github.com/vivek7325/CBL-Intern.git',
      livePreview: 'https://formvalidations.vercel.app/',
    },
    {
      imgsrc:pro3,
      name: 'OmniFoods Food Delivery',
      description:
        'Designed with plans,testimonials and items.',
      stack: ['HTML', 'JavaScript', 'CSS'],
      sourceCode: 'https://github.com/vivek7325/Restaurent-Site.git',
      livePreview: 'https://omnifoods-delivery-site.netlify.app/#',
    },
  ]
  
  const skills = [
    // if no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'CPP',
    'Nodejs'
  ]
  
  const contact = {
    // if left empty Contact section won't show up
    email: 'vk7684222@gmail.com',
    Number:'9350533284'
  }
  
  export { header, about, projects, skills, contact }