/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Axhar Arshad",
  title: "Hi all, I'm Azhar",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
  "https://drive.google.com/file/d/1cNyRhLD3Uf-IjNOmHqPcsI4gNPfph9xX/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Axhar85",
  linkedin: "https://www.linkedin.com/in/azhar-arshad/",
  yahoomail: "azhararshad_ntu@yahoo.com",
  gmail: "azhararshadntu@gmail.com",
  hotmail: "azhararshad_ntu@hotmail.com",
  facebook: "https://www.facebook.com/azhar.arshad.94/",
  codewars: "https://www.codewars.com/users/Axhar85",
  instagram: "https://www.instagram.com/axhar/",
  medium: "https://medium.com/@azhararshad_ntu",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "⚡ Creating application backend in Node, Express & Flask"
    )
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "WildCodeSchool",
      logo: require("./assets/images/wildlogo.png"),
      subHeader: "Full Stack WebDevelopment",
      duration: "March 2021 - July 2021",
      desc: "Learnt A fullstack web development program with JavaScript",
      descBullets: [
                "Daily standups and working with team in projecrts",
                "Taking part in Hackathons and create projects in limited time",
                "Working on real time projects with clients"
      ]
    },
    {
      schoolName: "University of The Punjab",
      logo: require("./assets/images/punjabuni.png"),
      subHeader: "Bachelor of Commerce and Business Administration",
      duration: " 2009",
      desc: "Specialized in Business Administration",
      descBullets: ["studied Accounting, Auditing, Business Law, and Economics."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/redefine.png"),
      projectName: "Redefine",
      projectDesc: "We built this Website in two months by a team of 4 from scratch, using agile methologies, as final project in a web developer bootcamp for a client located in Denmark. It's built with React, styled-components. The code was coded using NodeJS and Expressand, and MongoDB as a database.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/travelbudget.png"),
      projectName: "Travel Budget App",
      projectDesc: "It was our second project during the bootcamp. A full stack application that calculates for people who is going to travel, the currency exchange from the country of origin to the country of destination using ExchangeRate-API. The frontend was coded using React and styled-components and the backend with NodeJS and Express. It includes a Mysql database deployed in Heroku",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sheltered-sierra-28595.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Diploma in Web Developing for E-Commerce",
      subtitle:
        "Academia Colon Tres S.A. Madrid.",
      image: require("./assets/images/csa-logog.svg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1BpkEjSn8sf_b3RW71s7tTdwu1nvSWrmj/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "The Fundamentals of Digital Marketing",
      subtitle:
        "The Open University",
      image: require("./assets/images/open.png"),
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
      image: require("./assets/images/helsinki.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1_kZZHOz0h6ndMeb72luAhQ2yxll1H7kv/view?usp=sharing"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
  
    {
      url: "https://medium.com/@azhararshad_ntu/what-is-an-api-and-how-does-it-work-c21bb5c6cec0",
      title: "What is an API and how does it work",
      description:
        "How do apps let you create an account and log in with your social networks or Google credentials?"
    },
    {
      url: "https://medium.com/@azhararshad_ntu/difference-between-relational-and-non-relational-databases-def9a9217b2a",
      title: "Difference between Relational and Non-relational Databases",
      description:
        "Database innovation has changed and advanced over the years. Relational, Non Relational, Cloud databases, hierarchical…it can begin to urge confusing. Storing information doesn’t have to be be a problem."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+34-667 92 72 85",
    email_address: "azhararshad_ntu@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Axhar85", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
