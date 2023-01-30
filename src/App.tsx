import React, { useState } from "react";
import "./App.css";
import CreateBoard from "./components/CreateBoard";
import LoginSignUp from "./components/LoginSignUp";
import NavBar from "./components/NavBar";
import { SiAddthis } from "react-icons/si";
import Card from "./components/Card";
import AddCard from "./components/AddCard";
import { boardData } from "./components/Data";
import useLocalStorage from "./Hooks/useLocalStorage";
import { AiOutlineDelete } from "react-icons/ai";
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

function App() {
  const [list, setList] = useLocalStorage("BoardData", boardData);
  const [isLogged, setLogged] = useLocalStorage("isLogged", false);
  const [loginData, setLoginData] = useLocalStorage("LoginData", {
    imgURL: "",
    value: "",
    label: "",
    password: "",
  });
  const [deleted, setDeleted] = useState(true);
  const [createBoardVisible, setCreateBoardVisible] =
    React.useState<boolean>(false);
  const [addCardVisible, setAddCardVisible] = React.useState<string>("NULL");
  const [dragging, setDragging] = useState<number[]>([0, 0]);
  const [limitAlert, setLimitAlert] = useState(false);

  const startDrag = (
    event: React.DragEvent<HTMLDivElement>,
    cardNo: number,
    columnNu: number
  ) => {
    setDeleted(false);
    setDragging([cardNo, columnNu]);
  };
  const dragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const drop = (event: React.DragEvent<HTMLElement>, columnNu: number) => {
    if (list.columns[columnNu].limit !== "false")
      if (
        list.columns[columnNu].cards.length >=
        parseInt(list.columns[columnNu].limit)
      ) {
        setLimitAlert(true);
        setDeleted(true);
        return;
      }

    let tempData = list;

    tempData.columns[columnNu].cards.push(
      tempData.columns[dragging[1]].cards[dragging[0]]
    );

    tempData.columns[dragging[1]].cards.splice(dragging[0], 1);

    tempData.columns[columnNu].cards = tempData.columns[columnNu].cards.sort(
      (a: any, b: any) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      }
    );

    setList({ ...tempData });
    setDeleted(true);
  };
  const [activeDelete, setActiveDelete] = useState<boolean>(false);

  const handleDeleteCard = () => {
    let tmepData = list;
    tmepData.columns[dragging[1]].cards.splice(dragging[0], 1);
    setDeleted(true);
    setList({ ...tmepData });
  };

  return (
    <div id="main-container" className=" h-[100vh] w-[100%]  overflow-hidden ">
      <NavBar
        setCreateBoardVisible={setCreateBoardVisible}
        list={list}
        setLogged={setLogged}
        isLogged={isLogged}
        loginData={loginData}
      />

      <div
        className="absolute shadow-xl bottom-0 left-[47%] w-[80px] h-[80px] mb-7  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#e6e6e6]"
        style={{
          visibility: deleted ? "hidden" : "visible",
          border: "5px solid",
          borderColor: !activeDelete ? "#62bee7" : "red",
          color: !activeDelete ? "#62bee7" : "red",
          background: "white",
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setActiveDelete(true);
        }}
        onDragLeave={() => setActiveDelete(false)}
        onDrop={() => handleDeleteCard()}
      >
        <AiOutlineDelete className="text-4xl" />
      </div>

      {!isLogged && (
        <LoginSignUp
          setLogged={setLogged}
          setLoginData={setLoginData}
          loginData={loginData}
        />
      )}
      {createBoardVisible && (
        <CreateBoard setCreateBoardVisible={setCreateBoardVisible} />
      )}

      {addCardVisible !== "NULL" && (
        <AddCard
          setAddCardVisible={setAddCardVisible}
          addCardVisible={addCardVisible}
          setList={setList}
          list={list}
        />
      )}
      {limitAlert && (
        <div
          className="bg-red-100 absolute rounded-lg py-2 px-6 bottom-0 text-base ml-6 text-red-700 mb-3"
          role="alert"
        >
          Limit Reached
          <button
            onClick={() => setLimitAlert(false)}
            className="bg-red-500 ml-4 hover:bg-red-400  text-white font-bold py-[5px] px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      )}

      {isLogged && (
        <>
          <div
            id="Card-container"
            className="font-sans w-[100%] h-[100%] flex flex-row justify-evenly p-[20px]"
          >
            {list.columns.map((column: any, ColumnIndex: any) => {
              return (
                <div
                  key={ColumnIndex}
                  onDragOver={(event) => dragOver(event)}
                  onDrop={(event) => drop(event, ColumnIndex)}
                  className="w-[300px] rounded-md shadow-2xl max-h-[90%]   p-[15px] bg-slate-100 "
                >
                  <div className=" bg-slate-100 w-[100%]  flex items-center  flex-col h-[50px] justify-between border-b-[2px] border-white">
                    <section className=" w-[100%] text-2xl font-bold flex  items-center justify-between">
                      <div>
                        {column.columTitle}
                        <sub className="text-[#808080]">
                          {" "}
                          {column.limit != "false"
                            ? ` ${column.cards.length}/${column.limit}`
                            : ""}
                        </sub>
                      </div>
                      <div>{}</div>

                      <SiAddthis
                        className="text-2xl cursor-pointer active:text-blue-500"
                        onClick={() => {
                          if (column.limit !== "false") console.log("hii");

                          if (column.cards.length >= parseInt(column.limit)) {
                            setLimitAlert(true);
                            return;
                          }
                          setAddCardVisible(ColumnIndex.toString());
                        }}
                      />
                    </section>
                  </div>

                  <section
                    id="Cards-container"
                    className="mt-[10px]   max-h-[90%] overflow-auto scrollbar-hide"
                  >
                    {column.cards &&
                      column.cards.map((card_: any, index: any) => {
                        if (card_ === undefined) return;
                        return (
                          <div
                            className="cursor-pointer"
                            draggable
                            key={index}
                            onDragStart={(event) =>
                              startDrag(event, index, ColumnIndex)
                            }
                          >
                            <Card
                              cardData={card_}
                              key={index}
                              ColumnIndex={ColumnIndex}
                            />
                          </div>
                        );
                      })}
                  </section>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
