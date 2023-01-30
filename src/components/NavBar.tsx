import { listenerCount } from "process";
import React from "react";
import { BsFillBellFill } from "react-icons/bs";
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

type typeColumns = {
  cards: typeCard[];
  columTitle: string;
  limit: boolean;
};

type typeBoardData = {
  columns: typeColumns[];
  deleted: boolean;
};

type PropsType = {
  setCreateBoardVisible: React.Dispatch<React.SetStateAction<boolean>>;
  list: typeBoardData;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged: boolean;
  loginData: {
    imgURL: string;
    value: string;
    label: string;
    password: string;
  };
};
export default function NavBar(props: PropsType) {
  const [menueModal, setMenueModal] = React.useState(false);
  const [notificationModal, setNotificationModal] = React.useState(false);

  const loggedOut = () => {
    props.setLogged(false);
  };

  return (
    <nav className=" flex flex-row border-b-[2px]  h-[60px] justify-between items-center px-4 top-0 sticky shadow-lg bg-white">
      {menueModal && (
        <div
          className="absolute  right-0 w-[140px] bg-white mr-[18px] mt-[125px]  border-2  cursor-pointer"
          onMouseLeave={() => setMenueModal(false)}
        >
          <div
            className=" h-8 pl-4 flex items-center  hover:bg-[#62bee7] hover:text-white font-bold border-b-2"
            onClick={() => props.setCreateBoardVisible(true)}
          >
            Add Board
          </div>
          <div
            className=" h-8 pl-4 flex items-center  hover:bg-[#62bee7] hover:text-white font-bold"
            onClick={loggedOut}
          >
            Logout
          </div>
        </div>
      )}

      {notificationModal && (
        <div
          className=" pl-2 pr-2 p-2 absolute  right-0 w-[250px] bg-white mr-[160px] mt-[228px]  border-2  cursor-pointer rounded-md"
          onMouseLeave={() => setNotificationModal(false)}
        >
          <div className="font-bold ">Notifications</div>
          <div className="text-sm border-b-2">
            Your are invited by Jhon to join new Board
          </div>
          <div className="text-sm border-b-2">
            Your are invited by Jhon to join new Board
          </div>
          <div className="text-sm border-b-2">
            Your are invited by Jhon to join new Board
          </div>
        </div>
      )}

      <div className="flex flex-row">
        <div className="flex flex-row items-center bg-[#62bee7] py-[3px] px-[5px] shadow-md rounded-lg m-1 gap-1 w-[120px] justify-evenly">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJq43_rjQeUbEohxSFCPC5OYBltBhBoqPyQ&usqp=CAU"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-lg font-bold text-white">KanBan</span>
        </div>
        <div className="flex flex-row items-center">
          <>
            {usersInfo.map((item) => {
              return (
                <span>
                  <img
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={item.label}
                    className="w-8 h-8 rounded-full"
                    src={item.imgURL}
                  />
                </span>
              );
            })}

            <span>
              <img
                src="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/add-43.png"
                className="w-8 h-8 rounded-full"
              />
            </span>
          </>
        </div>
      </div>

      {props.isLogged ? (
        <div className="felx flex-row bg-red">
          <div className="flex flex-row gap-5 items-center font-bold">
            <BsFillBellFill
              className="text-2xl cursor-pointer active:opacity-50"
              onClick={() => setNotificationModal(!notificationModal)}
            />
            <div
              className="border-2 p-[4px] rounded-md flex flex-row items-center gap-2 cursor-pointer hover:bg-[#62bee7] hover:text-white pr-2 min-w-[140px]"
              onClick={() => setMenueModal(!menueModal)}
              style={{
                backgroundColor: menueModal ? "#62bee7" : "",
                color: menueModal ? "white" : "",
              }}
            >
              <img
                className="rounded-full h-8 w-8"
                src={props.loginData.imgURL}
              />
              {props.loginData.label}
            </div>
          </div>
        </div>
      ) : (
        <div className="border-2 p-[4px] rounded-md h-10 flex flex-row items-center gap-2 cursor-pointer bg-[#62bee7] text-white pr-2 font-bold">
          Loing/SignUp
        </div>
      )}
    </nav>
  );
}
