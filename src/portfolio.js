const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/ketsar28',
  title: 'Folio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muhammad Ketsar Ali Abi Wahid',
  role: 'Full Stack Developer',
  description:
    'I have the ability to develop server-side applications such as creating Restful APIs using Java from start to finish as needed. I apply design patterns according to current standards and clean architecture in building a program. I was able to implement tools for API testing or API clients for REST using Postman and Insomnia. In API creation I can secure APIs created using Spring Security. I am also able to implement unit testing in Java from programs that have been built.',
  resume:
    'https://drive.google.com/file/d/1lrmXF7w_ysDJpO9pSC4BlYaNO0XILhGw/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ketsarali/',
    github: 'https://github.com/ketsar28',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Coinscape API',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Java', 'Spring Framework', 'Spring Boot', 'Spring Security'],
    sourceCode: 'https://github.com/ketsar28/coinscape-project/tree/main',
    livePreview: 'https://github.com/ketsar28/coinscape-project/tree/main',
  },
  {
    name: 'Tokonyadia API',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Java', 'Spring Framework', 'Spring Boot', 'Spring Security'],
    sourceCode: 'https://github.com/ketsar28/tokonyadia/tree/master',
    livePreview: 'https://github.com/ketsar28/tokonyadia/tree/master',
  },
  {
    name: 'Community Complaint Service',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['PHP', 'Laravel 8', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/ketsar28/community-complaint-service',
    livePreview: 'https://github.com/ketsar28/community-complaint-service',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'NodeJS',
  'TailwindCSS',
  'Bootstrap',
  'Java',
  'Spring Boot',
  'Spring Cloud',
  'Microservices',
  'GIT',
  'Jira',
  'Docker',
  'JUnit5',
  'Mockito',
  'Selenium',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'muhammadketsar1@gmail.com',
}

export { header, about, projects, skills, contact }
