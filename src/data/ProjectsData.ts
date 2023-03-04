
import img1 from '../assets/project-img/proj (1).png'
import img2 from "../assets/project-img/proj(7).png";
import img3 from "../assets/project-img/proj(6).png";
import img4 from "../assets/project-img/proj (3).png";
import img5 from "../assets/project-img/proj (4).png";
import img6 from "../assets/project-img/proj(6).png";
import img7 from "../assets/project-img/proj(8).png";
import img8 from "../assets/project-img/proj(9).png";
import img9 from "../assets/project-img/proj(10).png";
import img10 from "../assets/project-img/proj (5).png";
interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'Full Stack ',
    description: `Build Complete Social Media App Using MERN Stack and use Redux for state management`,
    image: img1,
    GitHub: '',
    hosted: 'https://erfjs.com',
  },
  {
    title: 'React Redux',
    description: `Build A Food-App Using React and Redux which show different types of meals`,
    image: img9,
    GitHub: 'https://github.com/erfjs/animated-portfolio',
    hosted: 'https://animated-portfolio.erfjs.com/',
  },
  {
    title: 'Full Stack',
    description: `Build  a FaceSocial a Soical Newtorking site using Redux React and ExpressJS`,
    image: img4,
    GitHub: 'https://github.com/erfjs/ejbank',
    hosted: `https://ejbank.erfjs.com`,
  },
  {
    title: 'Mern Stack',
    description: `Build Notes App using MERN Stack and use Context Api for state management.`,
    image: img10,
    GitHub: 'https://github.com/erfjs/Todo-list',
    hosted: 'https://todo-app.erfjs.com',
  },
  {
    title: 'Java',
    description: `Build A Training And Placement Application using Java GUI Programming`,
    image:img3,
    GitHub: 'https://github.com/erfjs/weather-checker',
    hosted: `https://weather-checker.erfjs.com`,
  },
  {
    title: 'React',
    description: `Build A Cocktail App Using React and Redux which show different types of cocktails`,
    image: img8,
    GitHub: 'https://github.com/erfjs/foodstuffs_store',
    hosted: `https://foodstuffs-store.erfjs.com`,
  }, {
    title: 'C',
    description: `Build Complete Rent Application using C programming Language.`,
    image: img2,
    GitHub: 'https://github.com/erfjs/foodstuffs_store',
    hosted: `https://foodstuffs-store.erfjs.com`,
  },
   {
    title: 'React',
    description: `Build  Beach Resort App Using React and use Context for state management`,
    image: img5,
    GitHub: 'https://github.com/erfjs/foodstuffs_store',
    hosted: `https://foodstuffs-store.erfjs.com`,
  }
];
