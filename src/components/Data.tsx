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
  limit: string;
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
      limit: "4",
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
          imgURL: "https://wallpapercave.com/wp/wp1868517.jpg",
          date: "2023-06-05",
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
          title: "Playing BasketBall!",
        },
      ],
      columTitle: "To-Do",
      limit: "false",
    },

    {
      cards: [
        {
          imgURL: "https://wallpapercave.com/dwp2x/wp3616431.jpg",
          date: "2023-02-01",
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
          title: "Playing Games!",
        },
      ],
      columTitle: "InProgress",
      limit: "10",
    },

    {
      cards: [
        {
          imgURL: "https://wallpapercave.com/wp/wp7798969.jpg",
          date: "2022-02-05",
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
          title: "Home Work!",
        },
      ],
      columTitle: "Done",
      limit: "false",
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
      "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png",
    label: "Yash A",
    value: "Yash",
    password: "satyam3221",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WUx40RcbMrWzkDttvsv2_JkDqm0UezjQWw&usqp=CAU",
    label: "Shresth",
    value: "Shresth",
    password: "",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1GSCtlLeC8W0kH9FnaxzVpjDy8UxtFnJiBEyNCLAul9ol_grDYGTCSS1rUhhm7GjCWQ&usqp=CAU",
    label: "Mike",
    value: "Mike",
    password: "",
  },
  {
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9inRqaFfeNmYbm_Z_AwaICGOVqcRE-Of5Lw&usqp=CAU",
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
