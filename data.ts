export const serverResponse = () => {
  return [
    {
      id: 1,
      name: "Pet Store",
      quote:
        "Clothes for your pet for every taste and style. Next.js React.js SCSS Redux toolkit built websitem",
      features: [
        "Ability to add Item to cart",
        "Great Intro static website",
        "Discount sale system",
        "Responsive interface",
      ],
      techList: ["React.js", "TypeScript", "Redux-toolkit", "SCSS"],
    },
    {
      id: 2,
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
    },
    {
      id: 3,
      name: "Cookie Shop",
      quote:
        "The Cookie-shop website is a React build website using best practices of component development, and Redux technology.",
      features: [
        "The main page which fetches data from the server and sets it in the Redux Store for further usage.",
        "Creating unique Items from stored data",
        "Ability to add the item to the favorite list or to the cart",
        "The app tracks/stores your chosen items",
        "Modal which shows when clicked on the (Add to Cart) or (Remove from Cart)",
      ],
      techList: [
        "React.js",
        "React-router",
        "JavaScript",
        "Redux",
        "Redux-thunk",
        "SCSS",
        "Styled-components",
      ],
    },
    {
      id: 4,
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
    },
    {
      id: 5,
      name: "Hospital web",
      quote:
        "The Hospital task management website is a simple, quick, and responsive website built with the best principles of JavaScript Bootstrap technologies and Responsive Web Design.",
      features: [
        "A login mechanism that connects to the server and verifies the user's identity.",
        "Creating hospital visits by selecting a doctor and filling out the form's needed areas for that doctor.",
        "Render of any visits from the server that have been made and turning them into cards to display on the board.",
        "Unique filter which handles the card data and filters as selected by the user",
        "Cards offering the ability to modify, show more info or cancel a visit",
        "Fully responsive",
      ],
      techList: ["JavaScript", "Bootstrap", "HTML/CSS"],
    },
    {
      id: 6,
      name: "The Ham ",
      quote:
        "The Ham is a stunningly simple and compact fast responsive website built using the finest principles of HTML/CSS JavaScript technology and Responsive Web Design.",
      features: [
        "Designed entirely with Mobile First Technologies in mind",
        "Simple and attractive for business purposes",
        "The website is responsive in every aspect",
        "It is well designed",
      ],
      techList: ["JavaScript", "Node.js", "HTML/CSS", "Gulp"],
    },
    {
      id: 7,
      name: "Forkio",
      quote:
        "Forkio website is a beautifully simple and compact fast responsive website which is written using the best practices of JavaScript HTML/SCSS technologies and Responsive Web Design.",
      features: [
        "Fully written using Mobile First Technologies",
        "Simple and beautiful for Business purposes",
        "Responsiveness in every section of the website",
        "Greatly designed",
      ],
      techList: ["JavaScript", "SCSS", "Node.js", "HTML/CSS", "Gulp"],
    },
    {
      id: 8,
      name: "Galaxio",
      quote: "Galaxio website is a Galaxy tourism UX Project.",
      features: [
        "Simple and beautiful for Business purposes",
        "Greatly designed",
      ],
      techList: ["JavaScript", "SCSS", "Node.js", "HTML/CSS", "React.js"],
    },
    {
      id: 9,
      name: "Localoop",
      quote: "Localoop website is a Local Restaurant food order UX Project.",
      features: [
        "Simple and beautiful for Business purposes",
        "Greatly designed",
      ],
      techList: ["JavaScript", "SCSS", "Node.js", "HTML/CSS", "React.js"],
    },
  ];
};

export const serverSpesificResponse = async (num: any) => {
  const data = await serverResponse();

  return data.filter((item) => item.id === +num);
};
