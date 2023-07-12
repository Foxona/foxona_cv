"use client";
import Head from "next/head";
import { FaTelegram, FaGithub, FaFilePdf, FaLinkedinIn } from "react-icons/fa";

const ExperienceSection = () => {
  const myExperiences = [
    {
      title: "Fullstack Developer, Bonda",
      date: "August 2022 - Present",
      description: [
        "Created and maintained both front-end and back-end for real-time browser games utilizing Socket.io, MobX, Tailwind, React, NextJS, Express, MongoDB",
        "Integrated third-party APIs and services into web applications, such as payment system (Stripe), AWS S3 for storage, SES for mailing, Sentry/Logtail for observability",
        "Developed game statistics overview for analytics using Notion API",
        "Collaborated with a team of designers and product managers to design and implement complex UI features, resulting in a more efficient and visually appealing application",
        "Optimized web application performance",
      ],
    },
    {
      title: "Frontend Developer, Piar OÜ",
      date: "April 2022 - August 2022",
      description: [
        "Built a website for warehouse management and manufacturing quality control (Material UI)",
        "Improved API ergonomics by working closely with backend developers, resulting in a more convenient and faster user experience",
        "Worked with project managers to prioritize development tasks, leading to a more efficient and productive development process",
        "Developed a simple CI/CD pipeline for deploying applications on Vercel",
      ],
    },
    {
      title: "Frontend Developer, Softway++",
      date: "February 2021 - April 2022",
      description: [
        "Created the frontend portal for teachers, allowing them to create courses with articles, videos, quiz tests, and homework files",
        "Developed website section for students, allowing them to study and participate in courses with commenting",
        "Collaborated with UX designers to implement user suggestions and improve the user experience of the product",
        "Created custom UI components using React, and Ant Design, that transformed into useful dashboards",
        "Continuously researched and experimented with new frontend technologies, such as Firebase, Effector, and more",
      ],
    },
  ];

  // TODO: Add "And more" at the end of the list,
  // in the experience section allow to click on some words that will lead us to portfolio section,
  // make a copy button near an email and phone number
  // make a portofolio section
  // adjust the design for mobile

  return (
    <>
      <h3 className="mb-2 p-4 px-2 text-xl font-semibold">Experience</h3>
      {myExperiences.map((experience) => (
        <div className="mb-5 px-0" key={experience.title}>
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <h4 className="text-lg font-semibold">{experience.title}</h4>
            <span className="pr-5 text-gray-500">{experience.date}</span>
          </div>
          <ul className="mt-1 list-disc pl-5">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

const styles = {
  link: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
  linkIcon: "hover:text-blue-600 hover:hover:underline",
};

const handlePrint = () => {
  window.print();
};

const links = [
  {
    name: "pdf",
    icon: <FaFilePdf className="text-red-500 hover:cursor-pointer hover:text-red-400 print:hidden" size={28} onClick={handlePrint} />,
  },
  {
    name: "github",
    link: "https://github.com/foxona",
    icon: <FaGithub className={styles.linkIcon} size={30} />,
  },
  {
    name: "telegram",
    link: "https://t.me/lucawio",
    icon: <FaTelegram className={styles.linkIcon} size={30} />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/foxona",
    icon: <FaLinkedinIn className={styles.linkIcon} size={30} />,
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

const SkillsSection = () => {
  const skills = [
    {
      tagColor: "bg-secondary",
      skills: ["React", "NextJS", "MobX", "Ant Design", "Material UI", "Tailwind", "HTML5", "CSS", "Styled Components", "Prettier"],
    },
    {
      tagColor: "bg-secondary",
      skills: ["NodeJS", "Express", "Socket.io", "MongoDB", "Mongoose", "AWS", "REST API", "Websockets", "Stripe"],
    },
    {
      tagColor: "bg-secondary",
      skills: ["TypeScript", "JavaScript", "Git"],
    },
  ] as const;
  return (
    <>
      <h3 className="p-4 px-2 text-xl font-semibold">Skills</h3>
      <div className="mb-4 flex flex-col gap-1 px-0 text-sm print:mb-2 print:flex-row print:px-0 md:flex-row md:text-base">
        {skills.map(({ skills, tagColor }, i) => (
          <div key={i} className="mt-2 flex flex-col print:mt-0 md:mr-5 md:mt-0">
            <ul className="flex list-none flex-wrap gap-2 print:gap-1">
              {skills.map((skill, i) => (
                <li key={i} className={`whitespace-nowrap rounded-md px-2 py-0.5 print:px-0.5 print:py-0 ${tagColor}`}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default function Home() {
  return (
    <div className="bg-tile print:m-0 print:bg-inherit print:px-0 print:py-0 md:px-5 md:py-10">
      <Head>
        <title>Kirill Voronin</title>
      </Head>
      <div className="mx-auto max-w-4xl rounded-md bg-white p-4 shadow-md print:p-0 print:shadow-none md:p-10">
        <div className="flex flex-col justify-between print:flex-row md:flex-row">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Kirill Voronin</h1>
            <h2 className="text-2xl font-semibold">Full-Stack Developer</h2>
          </div>

          <div className="flex flex-col">
            <div className="pb-4 pt-2 print:pb-0 print:pt-0 md:pt-0">
              <div className="flex flex-col print:items-end md:items-end">
                <h1 className="text-lg">July 2023, Amsterdam</h1>
                <a className={`${styles.link} leading-5`} href="mailto:sodeepspace@gmail.com">
                  sodeepspace@gmail.com
                </a>
                <a className={`${styles.link} leading-5`} href="tel:+31685230402">
                  +31 685230402
                </a>
                <IconLinks />
              </div>
            </div>
          </div>
        </div>

        <SkillsSection />
        <ExperienceSection />
      </div>
    </div>
  );
}
