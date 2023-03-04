import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaMailBulk, FaTwitter } from "react-icons/fa";
import {SiGeeksforgeeks,SiLeetcode,SiHackerrank} from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/12602",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/jatin-sharma-0a867a210",
  },
  {
    title: "GFG",
    icon: <SiGeeksforgeeks color='#000000dc' />,
    link: "https://auth.geeksforgeeks.org/user/js223675",
  },
    {
    title: "HackerRank",
    icon: <SiHackerrank color='#000000dc' />,
    link: " https://www.hackerrank.com/js223675",
  },
    {
    title: "LeetCode",
    icon: <SiLeetcode color='#000000dc' />,
    link: ":https://leetcode.com/js223675/",
  },
  
];
