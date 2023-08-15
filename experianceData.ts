export const getExperianceData = () => [
  {
    id: "2",
    company: "Brand Vision Marketing",
    position: "UX/UI Designer & Front-End Developer",
    employmentPeriod: {
      start: new Date(2022, 11, 1),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    },
    location: "Toronto, Ontario, Canada",
    responsibilities: [
      "In my current role, I design and develop user-focused front-end code, refine designs through iterative processes, and stay updated on industry trends. I create wireframes, prototypes, and mockups, conduct user research and testing, and use advanced tools to build visually appealing, high-performance websites.",
    ],
  },
  {
    id: "3",
    company: "Unicorn",
    position: "Full Stack Developer",
    employmentPeriod: {
      start: new Date(2022, 1, 1),
      end: new Date(2022, 11, 1),
    },
    location: "Frankfurt, Hesse, Germany",
    responsibilities: [
      "In my previous role, I worked with executives to create technical specifications and developed databases using MongoDB and back-end servers with Express.js for front-end integration. I designed website mockups with Adobe XD, increasing client satisfaction by 75%, and led the intern developer team, achieving the highest score in performance evaluations.",
    ],
  },
  // {
  //   id: "4",
  //   company: "DAN-IT Education",
  //   position: "Full-Stack Development Student",
  //   employmentPeriod: {
  //     start: new Date(2020, 7, 1),
  //     end: new Date(2023, 0, 1),
  //   },
  //   location: "Toronto, Ontario, Canada",
  //   responsibilities: [
  //     "During my studies, I honed my JavaScript, CSS, and HTML skills and integrated UX/UI principles to develop dynamic, user-centric websites and React.js applications. I utilized Node.js for back-end development, ensuring seamless connectivity for front-end interfaces. I became proficient in CI/CD systems, Git operations, and automated Jest testing, facilitating high code quality and dependable deployments. My education provided a collaborative environment where I applied problem-solving skills to complex system issues, effectively enhancing system efficiency and user experience.",
  //   ],
  // },
  {
    id: "5",
    company: "Utex Ukraine LLC",
    position: "UX/UI Designer",
    employmentPeriod: {
      start: new Date(2015, 2, 1),
      end: new Date(2018, 10, 1),
    },
    location: "Kyiv, Ukraine",
    responsibilities: [
      "Took charge of the UX/UI design for a significant new product, starting from initial wireframes and prototypes, through to the final UI design. The product was well-received by users and stakeholders alike, contributing to a successful launch. Conducted user interviews and usability testing sessions for various products, providing valuable insights that informed design improvements. The enhancements improved the overall user experience and increased user engagement. Fostered a productive working relationship with the development team, ensuring smooth handoffs and effective implementation of designs. This cross-functional collaboration led to fewer revisions and a faster product development cycle.",
    ],
  },
];
