export const serverResponse = () => {
  return [
    {
      id: 1,
      name: "Dr Finance",
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
      id: 2,
      name: "Forkio Website",
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
      ],
    },
  ];
};

export const serverSpesificResponse = async (num: any) => {
  const data = await serverResponse();

  return data.filter((item) => item.id === +num);
};
