import React from "react";
import { BiCalendar } from "react-icons/bi";

const dateFormatter = (date: string) => {
  const months: any = {
    1: "JAN",
    2: "FEB",
    3: "MAR",
    4: "APR",
    5: "MAY",
    6: "JUN",
    7: "JUL",
    8: "AUG",
    9: "SEP",
    10: "OCT",
    11: "NOV",
    12: "DEC",
  };
  let d = date.split("-");
  return `${months[parseInt(d[1])]} ${d[2]},${d[0]}`;
};

export default function (cardData: any) {
  return (
    <div className=" p-[10px] shadow-lg rounded-lg bg-white border-red-600 mb-[15px]">
      <img
        className="w-[100%] h-[110px] rounded-md"
        draggable="false"
        src={`${cardData.cardData.imgURL}`}
      />
      <section className="font-bold mt-[5px]">
        {cardData.cardData.title}
      </section>
      <section className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center text-[#6D798E]">
          <BiCalendar className="mr-1" />
          <div style={{ fontSize: "11px", fontWeight: "bold" }} className="">
            {dateFormatter(cardData.cardData.date)}
          </div>
        </div>
        <div className="flex flex-row bg-red ">
          {cardData.cardData.tags.map((tag: any, ind: number) => {
            return (
              <div>
                <img
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={tag.label}
                  draggable="false"
                  className="h-[20px] w-[20px] rounded-full"
                  src={tag.imgURL}
                  alt="IMG"
                />
              </div>
            );
          })}
        </div>
      </section>

      <div className="border-2 mt-2 rounded-lg">
        <div
          className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1  rounded-md`}
          style={{ maxWidth: `${25 * (cardData.ColumnIndex + 1)}%` }}
        ></div>
      </div>
    </div>
  );
}
