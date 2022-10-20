export const serverResponse = () => {
  return [
    {
      id: 1,
      ux: true,
      name: "ThereJob",
      quote:
        "ThereJob is an application for people finding job opportunities with maximum simplicity and result.",
      features: [
        "Search and apply with simplicity",
        "Great filter capabilities",
        "Event System",
        "Application History",
        "Responsive",
      ],
      uxMethods: [
        "UX Research",
        "Wireframes",
        "Mockups",
        "UX Usability Study",
        "High-Fidelity prototypes",
        "Low-Fidelity prototypes",
      ],
      sources: [
        { category: "website", address: false },
        {
          category: "UX Study Case",
          address: "https://www.behance.net/gallery/155212065/ThereJob",
        },
      ],
    },

    {
      id: 2,
      ux: true,
      name: "ZooLoo",
      quote:
        "ZooLoo is an application for ordering treats and clothes for pets.",
      features: [
        "Has an awesome Deisgn",
        "Checkout options",
        "Treats and clothes page",
        "Responsive",
      ],
      uxMethods: [
        "UX Research",
        "Wireframes",
        "Mockups",
        "UX Usability Study",
        "High-Fidelity prototypes",
        "Low-Fidelity prototypes",
      ],
      sources: [
        { category: "website", address: false },
        {
          category: "UX Study Case",
          address: "https://www.behance.net/gallery/155224033/ZooLoo",
        },
      ],
    },
    {
      id: 3,
      ux: false,
      name: "Dr.Finance",
      quote:
        "A must for every person who wants to get a hang of their finances and finally buy that beautiful house of the dream",
      features: [
        "Ability to add Income and Expenses to a stats table",
        "Possibility to view data of overall income/expenses on a doughnut chart",
        "Become up to date with rest of money from income and expenses",
        "Modify records in the table and delete if needed",
        "User Page with information",
        "Strong and safe authorization process using tokens",
        "All is saved and encrypted in a database",
      ],
      techList: [
        "React.js",
        "TypeScript",
        "Express.js",
        "Redux-toolkit",
        "styled-components",
        "MaterialUI",
        "axios",
        "Formik",
        "Yup",
        "react-chartjs-2",
        "JWT",
        "MongoDB",
        "bcrypt",
      ],
      sources: [
        { category: "website", address: false },
        {
          category: "UX Study Case",
          address:
            "https://www.figma.com/file/vHlbSYVVIbfr7lDG73iA1L/DR-Finance?node-id=0%3A1",
        },
      ],
    },
    {
      id: 4,
      ux: false,
      name: "Phototopia",
      quote:
        "Phototopia is a phone app written in React Native that works simullar to Pinterest. It shows the user Top of the daily pictures taken by great professionals around the world.",
      features: [
        "Form created with formik",
        "Authentication (of email and password fields through Yup)",
        "State managment using (Redux toolkit)",
        "Written fully on TypeScript",
        "Profile page with fetched data from server",
      ],
      techList: ["TypeScript", "React Native", "Formik", "HTML/CSS", "Yup"],
      sources: [
        {
          category: "website",
          address: "https://github.com/mr-nazarii/phototopia",
        },
        {
          category: "UX Study Case",
          address: false,
        },
      ],
    },
    {
      id: 5,
      ux: false,
      name: "Hospital web",
      quote:
        "The Hospital task management website is a simple, quick, and responsive website built with the best principles of JavaScript Bootstrap technologies and Responsive Web UX Study Case.",
      features: [
        "A login mechanism that connects to the server and verifies the user's identity.",
        "Creating hospital visits by selecting a doctor and filling out the form's needed areas for that doctor.",
        "Render of any visits from the server that have been made and turning them into cards to display on the board.",
        "Unique filter which handles the card data and filters as selected by the user",
        "Cards offering the ability to modify, show more info or cancel a visit",
        "Fully responsive",
      ],
      techList: ["JavaScript", "Bootstrap", "HTML/CSS"],
      sources: [
        {
          category: "website",
          address: "https://github.com/mr-nazarii/hospital-task-manager",
        },
        {
          category: "UX Study Case",
          address: false,
        },
      ],
    },
    {
      id: 6,
      ux: false,
      name: "The Ham",
      quote:
        "The Ham is a stunningly simple and compact fast responsive website built using the finest principles of HTML/CSS JavaScript technology and Responsive Web UX Study Case.",
      features: [
        "UX Study Caseed entirely with Mobile First Technologies in mind",
        "Simple and attractive for business purposes",
        "The website is responsive in every aspect",
        "It is well UX Study Caseed",
      ],
      techList: ["JavaScript", "Node.js", "HTML/CSS", "Gulp"],
      sources: [
        {
          category: "website",
          address: "https://mr-nazarii.github.io/digital-product/",
        },
        {
          category: "UX Study Case",
          address: false,
        },
      ],
    },
    {
      id: 7,
      ux: false,
      name: "Forkio",
      quote:
        "Forkio website is a beautifully simple and compact fast responsive website which is written using the best practices of JavaScript HTML/SCSS technologies and Responsive Web UX Study Case.",
      features: [
        "Fully written using Mobile First Technologies",
        "Simple and beautiful for Business purposes",
        "Responsiveness in every section of the website",
        "Greatly UX Study Caseed",
      ],
      techList: ["JavaScript", "SCSS", "Node.js", "HTML/CSS", "Gulp"],
      sources: [
        {
          category: "website",
          address: "https://mr-nazarii.github.io/forkio-project/",
        },
        {
          category: "UX Study Case",
          address: false,
        },
      ],
    },
    {
      id: 8,
      ux: false,
      name: "Galaxio",
      quote: "Galaxio website is a Galaxy tourism UX Project.",
      features: [
        "Simple and beautiful for Business purposes",
        "Greatly UX Study Caseed",
      ],
      techList: [
        "JavaScript",
        "SCSS",
        "TypeScript",
        "HTML/CSS",
        "React.js",
        "React-Bootstrap",
      ],
      sources: [
        { category: "website", address: "https://galaxio.vercel.app/" },
        {
          category: "UX Study Case",
          address: "https://www.figma.com/file/8F3AyzJzeDSE3NODR6RXSa/Galaxio",
        },
      ],
    },
    {
      id: 9,
      ux: false,
      name: "Localoop",
      quote: "Localoop website is a Local Restaurant food order UX Project.",
      features: [
        "Simple and beautiful for Business purposes",
        "Greatly UX Study Caseed",
      ],
      techList: ["JavaScript", "SCSS", "Node.js", "HTML/CSS", "React.js"],
      sources: [
        { category: "website", address: false },
        {
          category: "UX Study Case",
          address:
            "https://www.figma.com/file/g4AnpXJGE9cMMht0JesSV5/Local-Restaurant-application",
        },
      ],
    },
  ];
};

export const serverSpesificResponse = async (num: any) => {
  const data = await serverResponse();

  return data.filter((item) => item.id === +num);
};
