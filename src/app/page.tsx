"use client";
import Head from "next/head";
import { FaTelegram, FaGithub, FaFilePdf } from "react-icons/fa";

const ExperienceSection = () => {
  const myExperiences = [
    {
      title: "Fullstack Developer, Bonda",
      date: "August 2022 - Present",
      description: [
        "Developed and maintained front-end and back-end for real-time browser games with websocket connection using MobX, Tailwind CSS, React, NextJS; with Express, Socket.io and MongoDB on the back end.",
        "Collaborated with a team of designers and product managers to design and implement complex UI features, resulting in a more efficient and visually appealing application.",
        "Optimized web application performance",
        "Integrated third-party APIs and services into web applications, such as payment system (Stripe), using AWS S3 for storage, and SES for mailing",
      ],
    },
    {
      title: "Frontend Developer, Piar OÜ",
      date: "April 2022 - August 2022",
      description: [
        "Developed a website for warehouse management and manufacturing quality control (Material UI)",
        "Worked together with backend developers to design and implement APIs for the application.",
        "Worked with project managers to prioritize development tasks, resulting in a more efficient and productive development process.",
        "Developed simple CI/CD for deploying an application on Vercel",
      ],
    },
    {
      title: "Frontend Developer, Softway++",
      date: "February 2021 - April 2022",
      description: [
        "Created the frontend portal for teachers, allowing them to create courses with articles, videos, quiz tests, and homework files.",
        "Developed website section for students, allowing them to study and participate in courses with commenting.",
        "Collaborated with UX designers to implement user suggestions and improve the user experience of the web application.",
        "Created custom UI components using React, Ant Design, resulting in a consistent and visually appealing design language across the web application.",
        "Continuously researched and experimented with new frontend technologies, such as Firebase, Effector, etc.",
      ],
    },
  ];

  return myExperiences.map((experience) => (
    <div className="mb-5" key={experience.title}>
      <h4 className="text-lg font-semibold">{experience.title}</h4>
      <p>{experience.date}</p>
      <ul className="list-disc pl-5">
        {experience.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  ));
};

const styles = {
  link: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
};

const handlePrint = () => {
  window.print();
};

const links = [
  {
    name: "pdf",
    icon: <FaFilePdf color="red" className="hover:cursor-pointer" size={28} onClick={handlePrint} />,
  },
  // {
  //   name: "email",
  //   link: "mailto:sodeepspace@gmail.com",
  //   icon: <FaEnvelope size={32} />,
  // },
  {
    name: "github",
    link: "https://github.com/foxona",
    icon: <FaGithub size={30} />,
  },
  {
    name: "telegram",
    link: "https://t.me/lucawio",
    icon: <FaTelegram size={30} />,
  },
];

const IconLinks = () => (
  <div className="mt-2 flex items-center gap-1">
    {links.map((link) =>
      link.link ? (
        <a key={link.name} href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="icon-link">
          {link.icon}
        </a>
      ) : (
        <span key={link.name}>{link.icon}</span>
      )
    )}
  </div>
);

export default function Home() {
  return (
    <div className="bg-gray-100 px-5 py-10 text-black print:m-0 print:bg-inherit print:px-0 print:py-0">
      <Head>
        <title>Kirill Voronin</title>
      </Head>
      <div className="mx-auto max-w-4xl rounded-md bg-white p-10 shadow-md print:p-0 print:shadow-none">
        <div className="flex flex-col justify-between  md:flex-row">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Kirill Voronin</h1>
            <h2 className="text-2xl font-semibold">
              <span className="hidden md:inline">Front-End / </span>Full-Stack Developer
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="grow pt-2 md:pt-0">
              <div className="flex flex-col leading-4 md:items-end">
                <h1 className="text-lg">June 2023, Amsterdam</h1>
                <a className={styles.link} href="tel:+31685230402">
                  +31 685230402
                </a>
                <a className={styles.link} href="mailto:sodeepspace@gmail.com">
                  sodeepspace@gmail.com
                </a>
                <IconLinks />
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-3 text-xl font-semibold">Skills</h3>

        <div>
          <p>Web Development, JS, TS, Express, MongoDB, Stripe, Websockets</p>
          <p className="mb-2">React, NextJS, HTML5, CSS, Tailwind, Material UI, Ant D</p>
        </div>

        <h3 className="mb-2 text-xl font-semibold">Experience</h3>
        <ExperienceSection />
      </div>
    </div>
  );
}
