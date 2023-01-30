import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsLayoutTextSidebar } from "react-icons/bs";

type PROPS = {
  setCreateBoardVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateBoard(props: PROPS) {
  const [columns, setColumns] = React.useState([
    {
      columnName: "",
      cards: [],
      limit: "false",
    },
  ]);
  const [boardName, setBoardName] = React.useState("");

  const handleCreateBoard = (e: any) => {
    e.preventDefault();

    fetch("https://kanban-9b1b3-default-rtdb.firebaseio.com/Board.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BoardName: boardName,
        columns: columns,
        users: [],
        deleted: false,
      }),
    });
  };

  const handleAddColumns = () => {
    if (columns.length > 3) return;
    setColumns([
      ...columns,
      {
        columnName: "",
        cards: [],
        limit: "false",
      },
    ]);
  };
  return (
    <form
      onSubmit={handleCreateBoard}
      className="bg-white flex flex-col w-[450px] h-[500px] absolute left-[35%] mt-[50px] rounded-lg shadow-xl  p-[10px] z-50 "
    >
      <header className="font-bold text-2xl mt-4  text-center">
        Create Board
      </header>
      <br />
      <AiOutlineClose
        onClick={() => props.setCreateBoardVisible(false)}
        className="absolute right-0 text-2xl mr-[15px] cursor-pointer active:text-blue-500"
      />
      <section className="flex flex-row mt-5 items-center  pl-[20px] pr-[20px]">
        <div className="font-bold">Board Name :</div>
        <input
          className="shadow appearance-none border rounded w-[50%] ml-[10px] py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="board-name"
          type="text"
          required
          placeholder="Board Name"
          onChange={(e) => setBoardName(e.target.value)}
        />
      </section>
      <section id="colums">
        <div className="flex flex-row justify-around">
          <header className="ml-[10px]">Colums Name</header>
          <header className="ml-[38px]">Limit Work</header>
          <AiOutlineDelete className="text-xl opacity-0 " />
        </div>
        <div>
          {columns.map((item, index) => {
            return (
              <ColumnRow
                key={index}
                item={item}
                index={index}
                columns={columns}
                setColumns={setColumns}
              />
            );
          })}
        </div>
        <div
          className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-2 rounded w-[100px] pointer"
          onClick={handleAddColumns}
        >
          Add Column
        </div>
      </section>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-2 rounded w-[100px] pointer mt-[10px] ml-[10px]"
      >
        Submit
      </button>
    </form>
  );
}

type rowType = {
  item: {
    columnName: string;
    limit: string;
  };
  index: number;
  columns: Array<{
    columnName: string;
    limit: string;
  }>;
  setColumns: any;
};

const handleDeleteCol = (index: any, setColumns: any, c: any) => {
  const newColumns = c.filter((item: any, i: any) => i !== index);
  setColumns(newColumns);
};

const handleColumnChange = (e: any, c: any, index: any, setColumns: any) => {
  let temp = [...c];
  temp[index].columnName = e.target.value;
  setColumns(temp);
};
const handleLimitChange = (e: any, c: any, index: any, setColumns: any) => {
  let temp = [...c];
  temp[index].limit = e.target.value;
  setColumns(temp);
};

const ColumnRow = (props: rowType) => {
  return (
    <div className="flex flex-row justify-around m-3 items-center">
      <input
        required
        value={props.item.columnName}
        placeholder={`Column ${props.index + 1}`}
        className="w-[150px]   appearance-none border rounded  ml-[10px] py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) =>
          handleColumnChange(e, props.columns, props.index, props.setColumns)
        }
      />
      <input
        placeholder="N/A"
        onChange={(e) =>
          handleLimitChange(e, props.columns, props.index, props.setColumns)
        }
        value={props.item.limit === "false" ? "" : props.item.limit}
        className="w-[100px]   appearance-none border rounded  ml-[10px] py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <AiOutlineDelete
        className="text-xl cursor-pointer hover:text-blue-500 hover:shadow-lg"
        onClick={() =>
          handleDeleteCol(props.index, props.setColumns, props.columns)
        }
      />
    </div>
  );
};
