type typeUsers = {
  imgURL: string;
  value: string;
  label?: string;
  password: string;
};
type typeCard = {
  imgURL: string;
  date: string;
  tags: typeUsers[];
  title: string;
  taskDes: string;
};

type typeColumns = {
  cards: typeCard[];
  columTitle: string;
  limit: boolean;
};

type typeBoardData = {
  deleted: boolean;
  columns: typeColumns[];
};

export const boardData: typeBoardData = {
  deleted: false,

  columns: [
    {
      cards: [
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
      ],
      columTitle: "BackLog",
      limit: false,
    },

    {
      cards: [
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
      ],
      columTitle: "To-Do",
      limit: false,
    },
    {
      cards: [
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
      ],
      columTitle: "InProgress",
      limit: false,
    },

    {
      cards: [
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp4546227.jpg",
          date: "2022-05-05",
          tags: [
            {
              imgURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
              label: "Satyam",
              value: "Satyam",
              password: "",
            },
          ],
          taskDes: "something not decided",
          title: "Gear up for Forest!",
        },
      ],
      columTitle: "Done",
      limit: false,
    },
  ],
};

export const usersInfo: typeUsers[] = [
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
    label: "Satyam Jha",
    value: "satyam Jha",
    password: "satyam3221",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
    label: "Yash A",
    value: "Yash",
    password: "satyam3221",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
    label: "Shresth",
    value: "Shresth",
    password: "",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
    label: "Mike",
    value: "Mike",
    password: "",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
    label: "Jhon",
    value: "Jhon",
    password: "",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyuq5iI30Yo3TwJF-Sr5PJz0KZLImVddlRw&usqp=CAU",
    label: "Ben",
    value: "Ben",
    password: "",
  },
];
