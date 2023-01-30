import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Select from "react-select";
import { usersInfo } from "./Data";

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
const options = usersInfo;

interface PROPS {
  setEditCardVisible: React.Dispatch<React.SetStateAction<string>>;
  editCardVisible: any;
  list: any;
  setList: any;
}

const EditCard: React.FC<PROPS> = ({
  setEditCardVisible,
  editCardVisible,
  list,
  setList,
}) => {
  const [cardTemp, setCardTemp] = React.useState<typeCard>({
    imgURL: "",
    date: "",
    tags: [],
    title: "",
    taskDes: "",
  });

  const handleAddCard = (e: any) => {
    e.preventDefault();
    return;

    let tempList = list;

    tempList["columns"][editCardVisible]["cards"].push(cardTemp);

    let tempSortList = tempList["columns"][editCardVisible]["cards"].sort(
      (a: any, b: any) => {
        if (a.date < b.date) {
          return -1;
        } else if (a.date > b.date) {
          return 1;
        } else {
          return 0;
        }
      }
    );
    tempList["columns"][editCardVisible]["cards"] = tempSortList;

    setList(tempList);
    setEditCardVisible("NULL");
    return;
  };

  return (
    <div className="absolute  w-[100%]   h-[100%] flex  justify-center bg-[rgba(0,0,0,0.4)] z-10">
      <form
        onSubmit={handleAddCard}
        className="bg-white w-[25%] h-[50%]  mt-[80px] rounded-lg shadow-2xl min-w-[370px]"
      >
        <header className="flex flex-row items-center justify-center mt-[10px]">
          <div className=" text-2xl font-bold text-center">Add Card</div>
          {/* <div>{addCardVisible}</div> */}
        </header>
        <section className="p-4 gap-2">
          <table className=" w-[100%] ">
            <tr className=" flex flex-row items-center mt-[5px]">
              <td className=" flex flex-1">Title:</td>
              <td className=" flex flex-1">
                <input
                  required
                  value={
                    list["columns"][editCardVisible.column]["cards"][
                      editCardVisible.card
                    ].title
                  }
                  onChange={(e) => {
                    setCardTemp({ ...cardTemp, title: e.target.value });
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </td>
            </tr>
            <tr className=" flex flex-row items-center mt-[5px]">
              <td className=" flex flex-1">Date:</td>
              <td className=" flex flex-1">
                <input
                  required
                  value={
                    list["columns"][editCardVisible.column]["cards"][
                      editCardVisible.card
                    ].date
                  }
                  onChange={(e) => {
                    setCardTemp({ ...cardTemp, date: e.target.value });
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                />
              </td>
            </tr>

            <tr className=" flex flex-row items-center mt-[5px]">
              <td className=" flex flex-1">ImageURL:</td>
              <td className=" flex flex-1">
                <input
                  value={
                    list["columns"][editCardVisible.column]["cards"][
                      editCardVisible.card
                    ].imgURL
                  }
                  onChange={(e) => {
                    setCardTemp({ ...cardTemp, imgURL: e.target.value });
                  }}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </td>
            </tr>

            <div className=" flex flex-col">
              <div className=" flex flex-1 mb-[10px] mt-[5px] font-bold">
                Tag Peoples
              </div>
              <Select
                onChange={(e: any) => {
                  setCardTemp({ ...cardTemp, tags: e });
                }}
                defaultValue={[
                  ...list["columns"][editCardVisible.column]["cards"][
                    editCardVisible.card
                  ].tags,
                ]}
                className="max-w-[350px]"
                isMulti
                closeMenuOnSelect={false}
                options={options}
              />
            </div>
          </table>
        </section>

        <section className="flex flex-row justify-around items-center mt-[px]">
          <div
            onClick={() => {
              setEditCardVisible("NULL");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[120px] text-center cursor-pointer"
          >
            Close
          </div>
          <button
            type={"submit"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[120px]"
          >
            Edit Card
          </button>
        </section>
      </form>
    </div>
  );
};
export default EditCard;
