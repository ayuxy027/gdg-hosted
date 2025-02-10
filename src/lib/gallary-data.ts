import genAiMain from "../assets/GenAI/main.jpg";
import genVid1 from "../assets/GenAI/vid1.mp4";
import genVid2 from "../assets/GenAI/vid2.mp4";
import genVid3 from "../assets/GenAI/vid3.mp4";
import genImg1 from "../assets/GenAI/img1.jpg";
import genImg2 from "../assets/GenAI/img2.jpg";
import genImg3 from "../assets/GenAI/img3.jpg";
import genImg4 from "../assets/GenAI/img4.jpg";
import genImg5 from "../assets/GenAI/img5.jpg";
import genImg6 from "../assets/GenAI/img6.jpg";
import genImg7 from "../assets/GenAI/img7.jpg";
import genImg8 from "../assets/GenAI/img8.jpg";

import govTechMain from "../assets/GovTech/main-gov-tech.jpg";
import govTechVid1 from "../assets/GovTech/vid1.mp4";
import govTechVid2 from "../assets/GovTech/vid2.mp4";
import govTechVid3 from "../assets/GovTech/vid3.mp4";
import govTechImg1 from "../assets/GovTech/img1.jpg";
import govTechImg2 from "../assets/GovTech/img2.jpg";
import govTechImg3 from "../assets/GovTech/img3.jpg";
import govTechImg4 from "../assets/GovTech/img4.jpg";
import govTechImg5 from "../assets/GovTech/img5.jpg";
import govTechImg6 from "../assets/GovTech/img6.jpg";
import govTechImg7 from "../assets/GovTech/img7.jpg";
import govTechImg8 from "../assets/GovTech/img8.jpg";

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
}

export interface GallerySection {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  items: GalleryItem[];
}

export const gallerySections: GallerySection[] = [
  {
    id: "genAi-2024",
    title: "Build With GenAI",
    description:
      "Pratik Kale Sir discussed the impact of AI on various industries and its transformative potential, offering valuable insights into the future of technology.",
    coverImage: genAiMain,
    items: [
      { id: "1", type: "image", src: genAiMain, alt: "banner" },
      { id: "2", type: "image", src: genImg1, alt: "audience" },
      { id: "3", type: "video", src: genVid1, alt: "entry" },
      { id: "4", type: "image", src: genImg2, alt: "Flower by HOD" },
      { id: "5", type: "image", src: genImg3, alt: "Flower By GDG LEAD" },
      { id: "6", type: "image", src: genImg4, alt: "event-1" },
      { id: "7", type: "image", src: genImg5, alt: "event-2" },
      { id: "8", type: "video", src: genVid2, alt: "event-3" },
      { id: "9", type: "video", src: genVid3, alt: "students handband" },
      { id: "10", type: "image", src: genImg6, alt: "winner-1" },
      { id: "11", type: "image", src: genImg7, alt: "winner-2" },
      { id: "12", type: "image", src: genImg8, alt: "winner-3" },
    ],
  },
  {
    id: "code-for-govtech",
    title: "CODE 4 GovTech",
    description:
      'The event explored open-source technologies and the "Code for GovTech" initiative, emphasizing contributions to government tech. Participants engaged in workshops on creating tech solutions for societal impact.',
    coverImage: govTechMain,
    items: [
      { id: "1", type: "image", src: govTechMain, alt: "thumbnail" },
      { id: "2", type: "image", src: govTechImg1, alt: "speaker-img-1" },
      { id: "3", type: "image", src: govTechImg2, alt: "students-img-1" },
      { id: "4", type: "video", src: govTechVid1, alt: "speaker-vid" },
      { id: "5", type: "image", src: govTechImg3, alt: "students-img-2" },
      { id: "6", type: "image", src: govTechImg4, alt: "speaker-img-2" },
      { id: "7", type: "image", src: govTechImg5, alt: "students-img-3" },
      { id: "8", type: "image", src: govTechImg6, alt: "students-img-4" },
      { id: "9", type: "video", src: govTechVid2, alt: "students-vid" },
      { id: "10", type: "image", src: govTechImg7, alt: "student-speaker" },
      { id: "11", type: "image", src: govTechImg8, alt: "Team" },
      { id: "12", type: "video", src: govTechVid3, alt: "Summary" },
    ],
  },
];
