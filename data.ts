export const serverResponse = () => {
  return [
    {
      id: 1,
      name: "Dr Finance",
    },
    {
      id: 2,
      name: "Forkio Website",
    },
    {
      id: 3,
      name: "Cookie Shop",
    },
  ];
};

export const serverSpesificResponse = async (num: any) => {
  const data = await serverResponse();

  return data.filter((item) => item.id === +num);
};
