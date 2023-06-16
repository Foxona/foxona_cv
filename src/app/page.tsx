import Image from "next/image";
import Head from "next/head";

const ExperienceSection = () => {

  const myExperiences = [
    {
      title: "Fullstack Developer | Bonda",
      date: "August 2022 - Present",
      description: [
        "Developed and maintained front-end and back-end for real-time browser games with websocket connection using MobX, Tailwind CSS, React, NextJS; with Express, Socket.io and MongoDB on the back end.",
        "Collaborated with a team of designers and product managers to design and implement complex UI features, resulting in a more efficient and visually appealing application.",
        "Optimized web application performance",
        "Integrated third-party APIs and services into web applications, such as payment system (Stripe), using AWS S3 for storage, and SES for mailing",
      ],
    },
    {
      title: "Frontend Developer | Piar OÜ",
      date: "April 2022 - August 2022",
      description: [
        "Developed a website for warehouse management and manufacturing quality control (Material UI)",
        "Worked together with backend developers to design and implement APIs for the application.",
        "Worked with project managers to prioritize development tasks, resulting in a more efficient and productive development process.",
        "Developed simple CI/CD for deploying an application on Vercel",
      ],
    },
    {
      title: "Frontend Developer | Softway++",
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

export default function Home() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  console.log(currentMonth, currentYear);

  return (
    <div className="bg-gray-100 px-5 py-10 text-black">
      <Head>
        <title>Kirill Voronin</title>
      </Head>
      <div className="mx-auto max-w-4xl rounded-md bg-white p-10 shadow-md">

        <div className="flex justify-between items-center">
          <h1 className="mb-5 text-4xl font-bold">Kirill Voronin</h1>
          <h1 className="mb-5 text-2xl">June 2023, Amsterdam</h1>
        </div>

        <h2 className="text-2xl font-semibold">Front End Developer</h2>
        <div className="flex items-center gap-4">
          {/* <a href="tel:+31685230402">+31 685230402</a> */}
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="mailto:sodeepspace@gmail.com">sodeepspace@gmail.com</a>
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://github.com/foxona">github.com/foxona</a>
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://t.me/lucawio">t.me/lucawio</a>
        </div>
        <h3 className="text-xl font-semibold mt-3">Skills</h3>

        <div>
          <p>Web Development, JS, TS, React, NextJS</p>
          <p>Express, MongoDB, Stripe, Websockets</p>
          <p className="mb-5">HTML5, CSS, Tailwind, Material UI, Ant D</p>
        </div>

        <h3 className="mb-2 text-xl font-semibold">Experience</h3>
        <ExperienceSection />
      </div>
    </div>
  );
}
