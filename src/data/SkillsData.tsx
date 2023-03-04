import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiJava,
  SiJavascript,
  SiPostman,
  SiBootstrap,
  SiMaterialui,
  SiPwa,
  SiElectron,
  SiSpringboot,
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },

  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  
  {
    name: "Redux",
    icon: <SiRedux color='#000000dc' />,
    link: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  },
  {
    name: "Java",
    icon: <SiJava color='#000000dc' />,
    link: "https://developer.android.com/",
  },
   {
    name: "Java",
    icon: <SiSpringboot color='#000000dc' />,
    link: "https://developer.android.com/",
  },

  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "SASS",
    icon: <FaSass color='#000000dc' />,
    link: "https://sass-lang.com/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Material-Ui",
    icon: <SiMaterialui color='#000000dc' />,
    link: "https://mui.com/",
  },
  {
    name: "PWA",
    icon: <SiPwa color='#000000dc' />,
    link: "https://web.dev/progressive-web-apps/",
  },
  
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    icon: <SiPostman color='#000000dc' />,
    link: "https://www.postman.com/",
  },
];
