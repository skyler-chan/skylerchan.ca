
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://skylerchan.ca/',
  title: 'SC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Skyler Chan',
  role: 'work in progress',
  strings: ["test.", "test2."],
  description:
    "Skyler Chan is an 18-year old gap year student, currently living in Hong Kong. He's passionate about space exploration, Web 3.0, exponential technologies, photography, and philosophy.",
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/skylerchan03/',
    github: 'https://github.com/skyler-chan',
    twitter: 'https://twitter.com/skyler_chan_'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '3D J2 Orbit Propagator - UTAT',
    description:
      'Designed multiple iterations of 2D and 3D orbit propagators, including J2 Perturbation.',
    stack: ['Python', 'NumPy', 'MatPlotLib'],
    sourceCode: 'https://github.com/skyler-chan/3D-Orbit-Propagator-Using-NumPy-',
    livePreview: 'https://github.com/skyler-chan/3D-Orbit-Propagator-Using-NumPy-',
  },
  {
    name: 'Coming Soon...',
    description:
      '👀',
    stack: ['👀', '👀', '👀'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Coming Soon...',
    description:
      '👀',
    stack: ['👀', '👀', '👀'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Lightroom',
  'React',
  'French',
  'Photography',
  'Public Speaking',
  'Being Spontaneous',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'skylerchan2021@gmail.com',
}

export { header, about, projects, skills, contact }
