/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import wildLogo from "./assets/images/wildlogo.png";
import punjabUniLogo from "./assets/images/punjabuni.png";
import ieLogo from "./assets/images/ie.jpg";
import freelanceImage from "./assets/images/freelance.jpg";
import mondiaLogo from "./assets/images/mondiaLogo.png";
import mongodbLogo from "./assets/images/mongodb.svg";
import csaLogo from "./assets/images/csa-logog.svg";
import openLogo from "./assets/images/open.png";
import helsinkiLogo from "./assets/images/helsinki.png";
import pythonTrainingLogo from "./assets/images/pythonTrainingLogo.png";
import scrumTrainingLogo from "./assets/images/scrumTrainingLogo.png";
import phpTrainingLogo from "./assets/images/phpTrainingLogo.png";
import javaTrainingLogo from "./assets/images/javaTrainingLogo.png";
import awsTrainingLogo from "./assets/images/awsTrainingLogo.png";
import webServerTrainingLogo from "./assets/images/webServerTrainingLogo.png";
import aiMlTrainingLogo from "./assets/images/aiMlTrainingLogo.png";
const illustration = {
  animated: true
};

const greeting = {
  username: "Azhar Arshad",
  title: "Hi, I'm Azhar Arshad",
  subTitle: emoji(
    "Mid-level Front-End / Full Stack Developer in Madrid. I build mobile-first, responsive web applications with React, TypeScript, JavaScript, Next.js, Vue.js, Node.js and PHP/Blade, with strong production debugging and legacy-modernisation experience."
  ),
  resumeLink: "/Azhar_Arshad_CV_2026.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Axhar85",
  linkedin: "https://www.linkedin.com/in/azhar-arshad/",
  gmail: "azhararshad_ntu@yahoo.com",
  gitlab: "",
  medium: "https://medium.com/@azhararshad_ntu",
  display: true
};

const skillsSection = {
  title: "What I build",
  subTitle: "FRONTEND ENGINEERING WITH PRACTICAL FULL STACK CAPABILITY",
  skills: [
    emoji(
      "Build and maintain mobile-first React, TypeScript, Next.js and Vue.js interfaces for production web platforms."
    ),
    emoji(
      "Create reusable landing page and subscription-flow patterns for telecom and digital entertainment products."
    ),
    emoji(
      "Integrate REST APIs, analytics events, business logic and third-party services into customer journeys."
    ),
    emoji(
      "Debug production issues, refactor legacy code and improve performance, maintainability and release stability."
    ),
    emoji(
      "Use npm, GitLab, Docker, AWS and AI-assisted workflows to support delivery, documentation and troubleshooting."
    )
  ],
  softwareSkills: [
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-layer-group"},
    {skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs"},
    {skillName: "React Native", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "PHP / Blade", fontAwesomeClassname: "fab fa-php"},
    {skillName: "REST APIs", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "npm", fontAwesomeClassname: "fab fa-npm"},
    {skillName: "GitLab", fontAwesomeClassname: "fab fa-gitlab"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-database"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Wild Code School",
      logo: wildLogo,
      subHeader: "Full Stack Developer Bootcamp - 700 hours",
      duration: "March 2021 - July 2021",
      desc: "Intensive full stack web development program focused on JavaScript, React, Node.js, APIs and team delivery.",
      descBullets: [
        "Built projects in agile teams with daily standups, demos and client-oriented feedback.",
        "Practised frontend, backend, database and deployment workflows across real project constraints.",
        "Completed hackathons and deadline-driven builds using modern JavaScript tools."
      ]
    },
    {
      schoolName: "University of the Punjab",
      logo: punjabUniLogo,
      subHeader: "Bachelor of Commerce and Business Administration",
      duration: "2009",
      desc: "Business administration foundation with accounting, auditing, business law and economics.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend Engineering", progressPercentage: "90%"},
    {Stack: "Production Debugging", progressPercentage: "85%"},
    {Stack: "Full Stack Capability", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Front-End Developer",
      company: "Mondia Group",
      companylogo: mondiaLogo,
      logoClassName: "experience-logo-wide",
      date: "July 2022 - Present",
      desc: "Developing mobile-first landing pages, subscription flows and responsive web applications for telecom, entertainment and digital service platforms.",
      descBullets: [
        "Build reusable frontend patterns with React, TypeScript, JavaScript, Vue.js, PHP and Blade to improve campaign delivery speed and consistency.",
        "Integrate REST APIs, analytics events, business logic and third-party services into production customer journeys.",
        "Debug production issues, reduce recurring defects and support live telecom services used by large user bases.",
        "Improve frontend performance, page loading speed, responsiveness and cross-browser compatibility for mobile-first traffic.",
        "Use npm, GitLab, Docker, AWS and AI-assisted workflows for package management, deployment troubleshooting, documentation and delivery support."
      ]
    },
    {
      role: "Full Stack Developer (FTC)",
      company: "IE Business School",
      companylogo: ieLogo,
      date: "January 2022 - July 2022",
      desc: "Maintained and enhanced React, Vue.js and JavaScript applications for digital learning content and academic publishing workflows.",
      descBullets: [
        "Implemented UI fixes, production updates and maintainability improvements in existing applications.",
        "Supported stable delivery with GitLab, Docker and AWS while collaborating with production and publishing teams.",
        "Worked on continuity-focused improvements for systems used by students, professors and external clients."
      ]
    },
    {
      role: "Freelance Web / Full Stack Developer",
      company: "Freelance",
      companylogo: freelanceImage,
      date: "July 2021 - Present",
      desc: "Part-time and personal software work focused on responsive interfaces, full stack practice and modern frontend tooling.",
      descBullets: [
        "Build responsive web interfaces and personal software projects with React, JavaScript, TypeScript and React Native.",
        "Continue developing full stack capability through Node.js, PHP, REST APIs, databases, npm workflows and deployment practice."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "PROJECTS THAT MATCH MY CURRENT FRONTEND, PRODUCT AND PRODUCTION EXPERIENCE",
  projects: [
    {
      image: null,
      projectName: "Landing Page Generator",
      projectDesc:
        "Built and maintained reusable mobile-first landing page patterns for subscription campaigns, improving delivery speed, consistency and maintainability across telecom projects. Stack: React, TypeScript, JavaScript, PHP, Blade, GitLab and npm.",
      footerLink: [
        {name: "React"},
        {name: "TypeScript"},
        {name: "PHP / Blade"},
        {name: "npm"}
      ]
    },
    {
      image: null,
      projectName: "Subscription Platform Frontend",
      projectDesc:
        "Supported production subscription flows with API integration, analytics events, status handling, fallback journeys, debugging and cross-browser optimisation. Focused on stable releases and reliable mobile user journeys.",
      footerLink: [
        {name: "JavaScript"},
        {name: "REST APIs"},
        {name: "Docker"},
        {name: "AWS"}
      ]
    },
    {
      image: null,
      projectName: "Kids Learning App",
      projectDesc:
        "Personal React Native project with bilingual UI, voice interaction, sound effects, animations, gamification and child-friendly responsive design. Built to practise mobile UX, audio interactions and TypeScript architecture.",
      footerLink: [
        {name: "React Native"},
        {name: "Expo"},
        {name: "TypeScript"},
        {name: "Audio"}
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: "Certifications And Training",
  subtitle:
    "Supporting training in frontend development, full stack engineering, project delivery, cloud, databases and AI.",
  achievementsCards: [
    {
      title: "MongoDB for JavaScript Developers",
      subtitle: "MongoDB",
      image: mongodbLogo,
      imageClassName: "card-image-large",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MbO3tO757chIRLsXc_kNPgblf3PUaxIL/view?usp=sharing"
        }
      ]
    },
    {
      title: "Web Development for E-Commerce",
      subtitle: "Academia Colon Tres S.A. Madrid",
      image: csaLogo,
      imageClassName: "card-image-large",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1BpkEjSn8sf_b3RW71s7tTdwu1nvSWrmj/view?usp=sharing"
        }
      ]
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle: "The Open University",
      image: openLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ExbYjK4wIZ7SY9rzJoJSOMXf1d67_YU7/view?usp=sharing"
        }
      ]
    },
    {
      title: "Elements of AI",
      subtitle: "University of Helsinki",
      image: helsinkiLogo,
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1_kZZHOz0h6ndMeb72luAhQ2yxll1H7kv/view?usp=sharing"
        }
      ]
    },
    {
      title: "Applied Machine Learning with Python",
      subtitle: "Grupo Euroformac - Issued Apr 2022",
      image: pythonTrainingLogo,
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1jWuw6vrjtl9Frbyi5N5Dc0rJ5sDCYHEZ/view"
        }
      ]
    },
    {
      title:
        "Scrum Methodology for Software Project Management and Software Development",
      subtitle: "Grupo Aspasia - Issued Mar 2022",
      image: scrumTrainingLogo,
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1yb7N-isrbP_AT_LMfp6NY7X0gYoq8pHd/view"
        }
      ]
    },
    {
      title: "Web Development with PHP",
      subtitle: "Academia Lagasca Serrano SA - Issued May 2023",
      image: phpTrainingLogo,
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1Wm_SWfvoKxf4_G6K9RmJ1otsISOFx_fZ/view"
        }
      ]
    },
    {
      title: "Java Project Management with Maven",
      subtitle: "Impulso_06 - Issued Oct 2022",
      image: javaTrainingLogo,
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1UKyXvggw4WMymylaTkP9marKjxej5a3C/view"
        }
      ]
    },
    {
      title: "AWS Training",
      subtitle: "Additional cloud and deployment training",
      image: awsTrainingLogo,
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1IN7LHBrdWId1nEzUPWT6445t16k42nq7/view"
        }
      ]
    },
    {
      title: "Web Servers Training",
      subtitle: "Additional web infrastructure training",
      image: webServerTrainingLogo,
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1rjFRbUWy2d1d_TbhEjAJ_agTWvbmcaHx/view"
        }
      ]
    },
    {
      title: "AI / Machine Learning Training",
      subtitle: "Additional AI and machine learning training",
      image: aiMlTrainingLogo,
      footerLink: [
        {
          name: "Credential",
          url: "https://drive.google.com/file/d/1_aEP_uap8y_2YkRbUGgUAI3lsv4Q4BS9/view"
        }
      ]
    }
  ],
  display: true
};
const blogSection = {
  title: "Blogs",
  subtitle:
    "Technical writing from earlier learning and knowledge-sharing work.",
  blogs: [
    {
      url: "https://medium.com/@azhararshad_ntu/what-is-an-api-and-how-does-it-work-c21bb5c6cec0",
      title: "What is an API and how does it work",
      description:
        "A beginner-friendly explanation of how applications communicate through APIs."
    },
    {
      url: "https://medium.com/@azhararshad_ntu/difference-between-relational-and-non-relational-databases-def9a9217b2a",
      title: "Difference between Relational and Non-relational Databases",
      description:
        "A practical overview of relational and non-relational database concepts."
    }
  ],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Open to front-end, React, TypeScript and full stack opportunities in Madrid, Spain or remote-friendly teams.",
  number: "+34 667 927 285",
  email_address: "azhararshad_ntu@yahoo.com"
};

const twitterDetails = {
  userName: "Axhar85",
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
