const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://skylerchan.ca/",
  title: "SC.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Skyler Chan",
  role: "work in progress",
  strings: ["test.", "test2."],
  description:
    "Skyler is an 18-year old gap year student from Vancouver, currently living in Hong Kong. He's passionate about space exploration, Web 3.0, exponential technologies, photography, and philosophy.",
  // resume: 'https://example.com',
  social: {
    linkedin: "https://www.linkedin.com/in/skylerchan03/",
    github: "https://github.com/skyler-chan",
    twitter: "https://twitter.com/skyler_chan_",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "NASA Global Space School",
    description:
      "Canadian Delegate, led pitch to NASA engineer panel + space industry professionals",
    stack: ["Leadership", "Team Management"],
    livePreview:
      "https://www.linkedin.com/posts/skylerchan03_gss-1-star-int-ind-project-pitch-activity-6696599682979917824-UObr",
  },
  {
    name: "3D J2 Orbit Propagator - UTAT",
    description:
      "Designed a series of 2D, 3D, and 3D + J2 Perturbation orbit propagators using MatPlotLib and NumPy based on Keplerian elements",
    stack: ["Python", "NumPy", "MatPlotLib"],
    sourceCode:
      "https://github.com/skyler-chan/3D-Orbit-Propagator-Using-NumPy-",
    livePreview:
      "https://github.com/skyler-chan/3D-Orbit-Propagator-Using-NumPy-",
  },
  {
    name: "MartianDAO",
    description:
      "Creator and Core Team, decentralizing access to space exploration",
    stack: ["Notion", "React"],
    livePreview: "http://bit.ly/3rmmjn5",
  },
  {
    name: "Monument",
    description: "Community Manager/Operations/Growth",
    stack: ["Discord"],
    livePreview: "https://monument.app/",
  },
  {
    name: "Vancouver Youth Parliament",
    description: "Premier ('21) & Attorney-General ('20)",
    stack: ["Public Speaking", "Leadership", "Team Management"],
    livePreview: "https://bcyp.org/vyp",
  },
  {
    name: "Coming Soon 👀 ",
    description: "👀 👀 👀 ",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React",
  "Lightroom",
  "Photoshop",
  "French",
  "Photography",
  "Public speaking",
  "Flying drones",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "skyler@skylerchan.ca",
};

export { header, about, projects, skills, contact };
