import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.webp";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.png";
import portfolioImg07 from "../images/portfolio-07.png";
import portfolioImg08 from "../images/portfolio-08.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "StackOverflow Clone",
    description:
      "Developed a StackOverflow clone, a community-driven question and answer platform for programmers and developers.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    frontendUrl: "https://github.com/SachinChauhan402/stackoverflow-frontend",
    backendUrl: "https://github.com/SachinChauhan402/sobackend",
    deployedUrl: "https://monumental-cucurucho-92fa8c.netlify.app/auth",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Online Pizza Order App",
    description:
      "Created a user-friendly online pizza ordering application that allows customers to conveniently order their favorite pizzas from the comfort of their homes.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    frontendUrl: "https://github.com/SachinChauhan402/shaypizza-frontend",
    backendUrl: "https://github.com/SachinChauhan402/shaypizza-backend",
    deployedUrl: "https://jovial-moxie-b994d0.netlify.app/",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Web Scrapping",
    description:
      "Skilled in utilizing web scraping tools and libraries to extract structured data from HTML, XML, or other web formats, capturing specific elements or entire web pages.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    frontendUrl: "https://github.com/SachinChauhan402/Web-scraping-frontend",
    backendUrl: "https://github.com/SachinChauhan402/Webscraping-backend",
    deployedUrl: "https://astounding-mousse-2a9b6d.netlify.app/",
  },

  {
    id: "04",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "CRUD (data entry in Database)",
    description:
      "Developed a secure CRUD opeartion app we can save data to database of users and update or delete data.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    frontendUrl: "https://github.com/SachinChauhan402/crudf",
    backendUrl: "https://github.com/SachinChauhan402/crud",
    deployedUrl: "https://jolly-lamington-b1871c.netlify.app/",
  },
  {
    id: "06",
    imgUrl: portfolioImg07,
    category: "ux",
    title: "10XTD UI freelance work",
    description:
      "Added navbar with featues of dropdowns and added slided on both dropdowns.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
    frontendUrl: "",
    backendUrl: "",
    deployedUrl: "https://www.10xtd.in/",
  },
];

export default portfolios;
