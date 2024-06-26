import {
    FaCss3,
    FaReact,
    FaSass,
    FaPhoneAlt,
    FaUser,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMongodb, SiGmail } from "react-icons/si";
import work1 from "./assets/insta.png";
import work2 from "./assets/ecom.png";
import work3 from "./assets/weather.png";
// import work4 from "./assets/AiImageGenerator.png";
import work5 from "./assets/recipe.png";
import work6 from "./assets/chatverse.png";

export const bioData = [
    {
        id: 1,
        icon: <FaUser />,
        key: "Name",
        value: "Jatin Kushwah",
    },
    {
        id: 2,
        icon: <FaPhoneAlt />,
        key: "Phone",
        value: "+917697845380",
    },
    {
        id: 3,
        icon: <SiGmail />,
        key: "Email",
        value: "singhjatin354@gmail.com",
    },
];

export const icons = [
    <FaReact />,
    <IoLogoJavascript />,
    <IoLogoNodejs />,
    <SiMongodb />,
    <AiFillHtml5 />,
    <FaCss3 />,
    <FaSass />,
    <SiTypescript />,
];

export const workData = [
    {
        id: 6,
        img: work6,
        name: "project 6",
        gitLink: "https://github.com/Jatin-Kushwah/Chat-App",
        deployLink: "https://github.com/Jatin-Kushwah/Chat-App",
        // deployLink: "https://chatverse-leqo.onrender.com/",
        desc: "Chatverse: A MERN chat app with Socket.io, offering real-time messaging, group chats, notifications, and secure JWT authentication for effortless  communication.",
    },
    {
        id: 5,
        img: work5,
        name: "project 5",
        gitLink: "https://github.com/Jatin-Kushwah/recipe-app",
        deployLink: "https://recipe-app-rosy-nine.vercel.app/",
        desc: "A MERN stack recipe app with cuisine and category filters, search functionality, detailed recipe info, and an admin panel for adding/editing recipes. Simplifying cooking with convenience.",
    },
    {
        id: 2,
        img: work2,
        name: "project 2",
        gitLink: "https://github.com/Jatin-Kushwah/E-commerce",
        deployLink: "https://github.com/Jatin-Kushwah/E-commerce",
        desc: "My ecommerce webapp offers a wide selection of comic books and manga, making it the perfect destination for fans of the genre. Browse, purchase and enjoy your favorite titles in one convenient location.",
    },
    {
        id: 1,
        img: work1,
        name: "project 1",
        gitLink: "https://github.com/Jatin-Kushwah/Insta-Clone",
        deployLink: "https://client-app-e2xl.onrender.com/",
        desc: "I developed an Instagram clone using React, Node.js, and MongoDB. It features user authentication, media uploads, and a dynamic feed. I honed my full-stack skills and successfully brought the popular platform's functionality in this clone.",
    },
    {
        id: 3,
        img: work3,
        name: "project 3",
        gitLink: "https://github.com/Jatin-Kushwah/Weather-webApp",
        deployLink: "https://weather-webapp-jt.netlify.app/",
        desc: "My weather application project offers real-time weather updates with a user-friendly interface. It utilizes advanced weather APIs to provide accurate and local forecasts.",
    },
    // {
    //     id: 4,
    //     img: work4,
    //     name: "project 4",
    //     gitLink: "https://github.com/Jatin-Kushwah/AI-Image-Generator",
    //     deployLink: "https://ai-image-generator-client-flax.vercel.app/",
    //     desc: "My AI image generator project uses MERN stack and advanced AI models like DALL-E 2 and ChatGPT API to generate high-quality images from textual descriptions. It offers an interactive interface that showcases AI technology.",
    // },
];

export const contacts = [
    {
        id: 1,
        icon: <FaMapMarkerAlt />,
        text: "M.P , Gwalior",
    },
    {
        id: 2,
        icon: <SiGmail />,
        text: "singhjatin@gmail.com",
    },
    {
        id: 3,
        icon: <FaPhoneAlt />,
        text: "+917697845380",
    },
];

export const gitHub = "https://github.com/Jatin-Kushwah";
export const insta = "https://www.instagram.com/";
export const linkedin = "https://www.linkedin.com/in/jatin-kushwah-1b6694255/";
export const twitter = "https://twitter.com/";
