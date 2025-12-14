/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aamir Ansari",
  title: "Hi all, I'm Aamir",
  subTitle: emoji(
    "Full-Stack Developer with 4+ years of experience in building scalable web applications and AI-powered solutions using Angular, React, Node.js, and Python. Proven expertise in multilingual NLP, financial data processing, and end-to-end product development 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aGQUBEJWnZ4kiC77dWJx4u-Vktrc4Kc_/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aamir74",
  linkedin: "https://www.linkedin.com/in/aamir-ansari-63a7a41a4",
  gmail: "sabriaamir74@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER WITH EXPERTISE IN AI-POWERED SOLUTIONS AND SCALABLE WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build scalable web applications with React, Angular, Node.js, and modern JavaScript/TypeScript"
    ),
    emoji("⚡ Develop AI-driven solutions using RAG pipelines, LLMs, and multilingual NLP models"),
    emoji(
      "⚡ Architect microservices and optimize backend performance with Redis, Socket.io, and Docker"
    ),
    emoji(
      "⚡ Integration of third-party APIs and cloud services (AWS) for seamless data exchange"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kalsekar Technical Campus",
      logo: require("./assets/images/aiktc.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "2017 - 2021",
      desc: "Completed Bachelor's degree in Computer Science from Kalsekar Technical Campus, Panvel, Navi Mumbai.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React/Angular)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (Node.js/Python)",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/NLP & Embeddings",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Ez-XBRL Solutions",
      companylogo: require("./assets/images/ezxbrl.png"),
      date: "October 2022 – Present",
      desc: "Leading AI-driven automation and full-stack development for financial data processing solutions.",
      descBullets: [
        "Led AI-driven automation features using RAG pipelines, LLMs, and multilingual embedding models, reducing manual tagging efforts by 70%",
        "Managed a team of developers to translate business requirements into deliverables ensuring timely delivery",
        "Architected and deployed scalable microservices (Node.js, Redis, Socket) improving API response times by 30%",
        "Developed Financial Disclosure Compare using custom NLP library to detect structural and content changes in large HTML docs, cutting review time by 50%"
      ]
    },
    {
      role: "Software Engineer",
      company: "Tidalwave Technology Pvt Ltd",
      companylogo: require("./assets/images/tidalwave.png"),
      date: "August 2021 – July 2022",
      desc: "Full-stack development with focus on backend optimization and frontend integration.",
      descBullets: [
        "Built backend APIs in Node.js with optimized SQL queries & triggers, improving query performance by 35%",
        "Developed frontend in React.js with Redux state management, integrating multiple APIs for real-time data display",
        "Integrated third-party APIs, ensuring 99% uptime and seamless data exchange across services",
        "Mentored interns and junior developers, improving onboarding efficiency"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "FULL-STACK APPLICATIONS SHOWCASING MY DEVELOPMENT SKILLS",
  projects: [
    {
      image: require("./assets/images/mlo.png"),
      projectName: "Multilingual Overlay",
      projectDesc: "AI-powered solution that automatically transfers numeric tags from non-English financial filings to English counterparts using multilingual embeddings, reducing manual tagging time by 70%. Built with Angular, Node.js, and Python.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/tagsuggestion.png"),
      projectName: "Financial Tag Suggestions",
      projectDesc: "Multilingual AI-driven system using RAG to recommend contextual XBRL tags for financial content. Integrates LLMs and multilingual embeddings to deliver high-precision tag suggestions, reducing manual effort by 80%.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/videoLibrary.png"),
      projectName: "Video Library (FlashTube)",
      projectDesc: "Responsive video streaming webapp built with React, Redux Toolkit, and React Router. Features include filtering, playlists, and watch-later functionality with intuitive design for enhanced user engagement.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://flashtube.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerce.png"),
      projectName: "Ecommerce WebApp",
      projectDesc: "Full-stack MERN eCommerce application with RESTful APIs. Features include product browsing, user authentication, cart & order management, and logged-in product reviews. Built with React, Node.js, Express, and MongoDB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://plus-ecommerce-store.netlify.app/login"
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

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8286237776",
  email_address: "sabriaamir74@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
