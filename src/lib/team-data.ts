import devyaniImage from '../assets/GDG MEMBERS/Devyani_Chavan.jpeg'
import sakshamImage from '../assets/GDG MEMBERS/Saksham_Sharma.jpg';
import sumeetImage from '../assets/GDG MEMBERS/Sumeet_Gond.png';
import prernaImage from '../assets/GDG MEMBERS/Prerna_Agrawal.jpeg'
import rajImage from '../assets/GDG MEMBERS/Raj_Gupta.jpg'
import adityaImage from '../assets/GDG MEMBERS/Aditya_Chavan.jpg'
import mayankImage from '../assets/GDG MEMBERS/Mayank_Saraswat.jpg'
import riteshImage from '../assets/GDG MEMBERS/Ritesh_Devkate.jpg'
import shravaniImage from '../assets/GDG MEMBERS/Shravani_Bhalerao.png'
import ayushImage from '../assets/GDG MEMBERS/Ayush_Yadav.jpg'
import saishImage from '../assets/GDG MEMBERS/Saish_Mungase.jpg'
import tanmayImage from '../assets/GDG MEMBERS/tanmay_pagare.jpg'
import riteshPatilImage from '../assets/GDG MEMBERS/Ritesh_Patil.jpg'
import sanikaImage from '../assets/GDG MEMBERS/Sanika_Baviskar.png'
import pruthviImage from '../assets/GDG MEMBERS/Pruthviraj Chavan.jpg'
import santoshImage from '../assets/GDG MEMBERS/Santosh_Singh.jpg'
import shreyanshImage from '../assets/GDG MEMBERS/Shreyash_Jadhav.jpg'
import sujeetImage from '../assets/GDG MEMBERS/Sujeet_Yadav.jpg'

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github?: string;
  mail? : string;
};

export type Teams = {
  [key: string]: TeamMember[];
};

export const teams: Teams = {
  'Core': [
    {
      id: 1,
      name: "Devyani Chavan",
      role: "GDG Lead",
      image: devyaniImage,
      bio: "Devyani is a GDG Organizer and Microsoft Learn Ambassador, passionate about using LLMs to solve real-world problems.",
      linkedin: "https://www.linkedin.com/in/devyani-chavan",
      mail: "devyanichavan110@gmail.com"
    },
    {
      id: 2,
      name: "Ayush Yadav",
      role: "Tech Lead",
      image: ayushImage,
      bio: "Ayush is a full-stack developer and hackathon winner, excelling in AI and API integrations as GDG's Tech Lead.",
      linkedin: "https://www.linkedin.com/in/ayushyadav27",
      github: "https://github.com/ayuxy027",
      mail: "ayush421301@gmail.com"
    },
    {
      id: 3,
      name: "Shravani Bhalerao",
      role: "Design Lead",
      image: shravaniImage,
      bio: "Shravani is GDG's Design Lead, delivering innovative and visually appealing solutions with her creativity.",
      linkedin: "https://www.linkedin.com/in/shravani-bhalerao-8b45b5293",
      mail: "sb.natalya04@gmail.com"
    },
    {
      id: 4,
      name: "Ritesh Patil",
      role: "Finance Lead",
      image: riteshPatilImage,
      bio: "Ritesh is GDG's Finance Lead, combining technical skills with finance expertise to drive success.",
      linkedin: "https://www.linkedin.com/in/ritesh-patil-303b12256",
      mail : "5riteshrp@gmail.com"
    },
    {
      id: 5,
      name: "Saksham Sharma",
      role: "Public Relations Lead",
      image: sakshamImage,
      bio: "Saksham, GDG's PR Lead, is known for his communication skills, captivating audiences through shows and storytelling.",
      linkedin: "http://www.linkedin.com/in/capable-sharma",
      mail : "sakshams1983@gmail.com"
    },
    {
      id: 6,
      name: "Raj Gupta",
      role: "Event Lead",
      image: rajImage,
      bio: "Raj is GDG's Event Lead, skilled in video editing and management, excelling in creative event planning.",
      linkedin: "https://in.linkedin.com/in/-the-raj-gupta",
      mail : "theRajGuptapro@gmail.com"
    },
    {
      id: 7,
      name: "Santosh Singh",
      role: "Content Lead",
      image: santoshImage,
      bio: "Santosh is GDG's Content Lead, creating engaging content with his expertise in photography and social media.",
      linkedin: "https://www.linkedin.com/in/santosh-singh-26415828a",
      mail : "iamsingh.santosh@gmail.com"
    }
  ],
  'Tech': [
    {
      id: 8,
      name: "Ayush Yadav",
      role: "Tech Lead",
      image: ayushImage,
      bio: "Ayush is a full-stack developer and hackathon winner, excelling in AI and API integrations as GDG's Tech Lead.",
      linkedin: "https://www.linkedin.com/in/ayushyadav27",
      github: "https://github.com/ayuxy027",
      mail: "ayush421301@gmail.com"
    },
    {
      id: 9,
      name: "Saish Mungase",
      role: "Tech Member",
      image: saishImage,
      bio: "Saish is a full-stack developer specializing in AI applications that deliver impactful user experiences.",
      linkedin: "http://www.linkedin.com/in/saish-mungase",
      github: "https://github.com/saishmungase",
      mail: "saishmungase@gmail.com"
    },
    {
      id: 10,
      name: "Sujeet Yadav",
      role: "Tech Member",
      image: sujeetImage,
      bio: "Sujeet is a skilled developer, crafting clean and visually appealing website designs.",
      linkedin: "https://www.linkedin.com/in/sujeet-yadav0070",
      github: "https://github.com/codesujeet",
      mail: "ysujeet0070@gmail.com"
    },
  ],
  'Design': [
    {
      id: 11,
      name: "Shravani Bhalerao",
      role: "Design Lead",
      image: shravaniImage,
      bio: "Shravani is GDG's Design Lead, delivering innovative and visually appealing solutions with her creativity.",
      linkedin: "https://www.linkedin.com/in/shravani-bhalerao-8b45b5293",
      mail: "sb.natalya04@gmail.com"
    },
    {
      id: 12,
      name: "Mayank Saraswat",
      role: "Design Member",
      image: mayankImage,
      bio: "Mayank is a talented designer, consistently delivering creative and impressive design solutions.",
      linkedin: "https://www.linkedin.com/in/mayank-saraswat-a08401252",
      mail: "saraswatmayank336@gmail.com"
    },
    {
      id: 13,
      name: "Sanika Bavaskar",
      role: "Design Member",
      image: sanikaImage,
      bio: "Sanika is a creative designer, bringing fresh and innovative ideas to every project.",
      linkedin: "https://www.linkedin.com/in/sanika-bavaskar-473810325",
      mail: "sanika222kar@gmail.com"
    }
  ],
  'Finance': [
    {
      id: 14,
      name: "Ritesh Patil",
      role: "Finance Lead",
      image: riteshPatilImage,
      bio: "Ritesh is GDG's Finance Lead, combining technical skills with finance expertise to drive success.",
      linkedin: "https://www.linkedin.com/in/ritesh-patil-303b12256",
      mail : "5riteshrp@gmail.com"
    },
    {
      id: 15,
      name: "Pruthviraj Santosh Chavan",
      role: "Finance Member",
      image: pruthviImage,
      bio: "Pruthviraj is a disciplined and dedicated finance team member, ensuring focused contributions to GDG's success.",
      linkedin: "http://in.linkedin.com/in/pruthviraj-chavan-873736308",
      mail : "pruthvirajchavan2905@gmail.com"
    }
  ],
  'Public Relations': [
    {
      id: 16,
      name: "Saksham Sharma",
      role: "Public Relations Lead",
      image: sakshamImage,
      bio: "Saksham, GDG's PR Lead, is known for his communication skills, captivating audiences through shows and storytelling.",
      linkedin: "http://www.linkedin.com/in/capable-sharma",
      mail : "sakshams1983@gmail.com"
    },
    {
      id: 17,
      name: "Ritesh Devkate",
      role: "Public Relations Member",
      image: riteshImage,
      bio: "Ritech, a PR member, excels in communication and confidence, captivating large audiences with ease.",
      linkedin: "https://www.linkedin.com/in/ritesh-devkate-8b28222a3",
      mail : "rdevkate1920@gmail.com"
    },
    {
      id: 18,
      name: "Tanmay Pagare",
      role: "Public Relations Member",
      image: tanmayImage,
      bio: "Tanmay, a dynamic PR member, builds strong community ties and connects with diverse audiences effectively.",
      linkedin: "https://www.linkedin.com/in/tanmay-pagare-956a45297",
      mail : "tanmay8business@gmail.com"
    }
  ],
  'Event Management': [
    {
      id: 19,
      name: "Raj Gupta",
      role: "Event Lead",
      image: rajImage,
      bio: "Raj is GDG's Event Lead, skilled in video editing and management, excelling in creative event planning.",
      linkedin: "https://in.linkedin.com/in/-the-raj-gupta",
      mail : "theRajGuptapro@gmail.com"
    },
    {
      id: 20,
      name: "Shreyash Jadhav",
      role: "Event Member",
      image: shreyanshImage,
      bio: "Shreyansh ensures smooth coordination and successful events with his exceptional organizational skills.",
      linkedin: "https://www.linkedin.com/in/shreyash-jadhav-42541b256",
      mail : "Shreyashjadhav3999@gmail.com"
    },
    {
      id: 21,
      name: "Prerna Agrawal",
      role: "Event Member",
      image: prernaImage,
      bio: "Prerna's impressive management skills make her a key contributor to the success of every project.",
      linkedin: "https://www.linkedin.com/in/prerana-agrawal-25102a331",
      mail : "preragram78987@gmail.com"
    }
  ],
  'Content': [
    {
      id: 22,
      name: "Santosh Singh",
      role: "Content Lead",
      image: santoshImage,
      bio: "Santosh is GDG's Content Lead, creating engaging content with his expertise in photography and social media.",
      linkedin: "https://www.linkedin.com/in/santosh-singh-26415828a",
      mail : "iamsingh.santosh@gmail.com"
    },
    {
      id: 23,
      name: "Aditya Chavan",
      role: "Content Member",
      image: adityaImage,
      bio: "Aditya, a skilled Content Member, excels in photography and creates engaging digital content for GDG.",
      linkedin: "https://www.linkedin.com/in/aditya-chavan-714691257",
      mail : "email"
    },
    {
      id: 24,
      name: "Sumeet Gond",
      role: "Content Member",
      image: sumeetImage,
      bio: "Sumeet blends coding, communication, and UI skills to deliver high-quality content for GDG.",
      linkedin: "https://www.linkedin.com/in/sumeet-gond-22b7b5298",
      mail : "sumitv9009@gmail.com"
    }
  ]
};

