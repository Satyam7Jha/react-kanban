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
  limit: boolean;
};

type typeBoardData = {
  deleted: boolean;
  columns: typeColumns[];
};

function App() {
  const [list, setList] = useLocalStorage("BoardData", boardData);
  console.log(list, "hii", boardData);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(true);

  const [createBoardVisible, setCreateBoardVisible] =
    React.useState<boolean>(false);
  const [addCardVisible, setAddCardVisible] = React.useState<string>("NULL");

  const isLogged = true;

  const [dragging, setDragging] = useState<number[]>([0, 0]);

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
    let tempData = list;

    tempData.columns[columnNu].cards.push(
      tempData.columns[dragging[1]].cards[dragging[0]]
    );

    tempData.columns[dragging[1]].cards.splice(dragging[0], 1);
    setList({ ...tempData });
    setDeleted(true);
  };
  const [activeDelete, setActiveDelete] = useState<boolean>(false);

  const handleDeleteCard = () => {
    console.log("delete");
    let tmepData = list;
    tmepData.columns[dragging[1]].cards.splice(dragging[0], 1);
    setDeleted(true);
    setList({ ...tmepData });
  };

  return (
    <div id="main-container" className=" h-[100vh] w-[100%]  overflow-hidden ">
      <NavBar setCreateBoardVisible={setCreateBoardVisible} list={list} />
      <div
        className="absolute bottom-0 left-[47%] w-[80px] h-[80px] mb-7  rounded-full flex justify-center items-center cursor-pointer hover:bg-[#e6e6e6]"
        style={{
          visibility: deleted ? "hidden" : "visible",
          backgroundColor: !activeDelete ? "#62bee7" : "red",
        }}
      >
        <AiOutlineDelete
          className="text-4xl text-white"
          onDragOver={(e) => setActiveDelete(true)}
          onDragLeave={() => setActiveDelete(false)}
          onDrop={() => console.log("delete")}
        />
      </div>
      {!isLogged && <LoginSignUp />}
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

      {isLogged && !loading === false && (
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
                  <div className="top-0 sticky bg-slate-100 w-[100%]  flex items-center  flex-col h-[50px] justify-between border-b-[2px] border-white">
                    <section className=" w-[100%] text-2xl font-bold flex  items-center justify-between">
                      <div>{column.columTitle}</div>
                      <SiAddthis
                        className="text-2xl cursor-pointer active:text-blue-500"
                        onClick={() =>
                          setAddCardVisible(ColumnIndex.toString())
                        }
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
                            draggable
                            key={index}
                            onDragStart={(event) =>
                              startDrag(event, index, ColumnIndex)
                            }
                          >
                            <Card cardData={card_} key={index} />
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
