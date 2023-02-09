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
import work1 from "./assets/work1.png";

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
        value: "+917976586980",
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
        id: 1,
        img: work1,
        name: "project 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus, omnis unde facilis laboriosam, aut velit earum fugiat sunt aspernatur dolores. Sunt cum dolore repudiandae.",
    },
    {
        id: 2,
        img: work1,
        name: "project 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus, omnis unde facilis laboriosam, aut velit earum fugiat sunt aspernatur dolores. Sunt cum dolore repudiandae.",
    },
    {
        id: 3,
        img: work1,
        name: "project 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus, omnis unde facilis laboriosam, aut velit earum fugiat sunt aspernatur dolores. Sunt cum dolore repudiandae.",
    },
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
        text: "+917806856790",
    },
];
