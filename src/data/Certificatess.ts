
import cert1 from '../assets/certificates/project-img4.png'
import cert2 from '../assets/certificates/project-img5.png'
import cert3 from '../assets/certificates/project-img6.png'
import cert4 from '../assets/certificates/project-img10.png'
import cert5 from '../assets/certificates/project-img11.png'
import cert6 from '../assets/certificates/project-img12.png'
import cert7 from '../assets/certificates/project-img13.png'
import cert8 from '../assets/certificates/project-img14.png'
import cert9 from '../assets/certificates/project-img15.png'
import cert10 from '../assets/certificates/project-img16.png'

interface ProjectsType {
  title: string
  description: string
  image: string,
  GitHub: string
  hosted: string

}

export const ProjectsData: ProjectsType[] = [
 {

    image: cert1,

    title: "Nptel Java Certifcate",
    description: "Score a Gold Medal in Programming with Java!",
    GitHub:"",
    hosted:""
  }
  ,
  {
  
    image: cert3,

    title: "Training And Placement Application ",
    description: "Design Training And Placement App using Java Swing",
  GitHub:"",
    hosted:""
  },
  {

    image: cert2,
   
    title: "Car Rental System",
    description: "Design a Car Rental System Application using C Programming language",
  GitHub:"",
    hosted:""
  },
  {
   
   
    title: "Oasis Intership Web Development",
    description: "Design & Development",
    image: cert4,
GitHub:"",
    hosted:""  
},
  {
 
  

    title: "Hackerrank problem solving",
    description: "Dsa and CP",
    image: cert5,
  
GitHub:"",
    hosted:""},
  {

    
    title: "HackerRank JS Beginner",
    description: "Design & Development",
    image: cert6,
    GitHub:"",
    hosted:""
  },
  {


    title: "HackerRank JS Intermediate",
    description: "Design & Development",
    image: cert7,
    GitHub:"",
    hosted:""
  },
  {

  

    title: "HackerRank Python Basic",
    description: "Python ",
    image: cert8,
    GitHub:"",
    hosted:""
  },
  {
        title: "Problem Solving",
    description: "Dsa & CP",
    image: cert9,
    GitHub:"",
    hosted:""
  }
];
