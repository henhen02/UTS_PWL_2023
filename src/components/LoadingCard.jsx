import React from "react";

const LoadingCard = () => {
  return (
    <div className="flex flex-col p-[20px] h-[400px] w-[240px] shadow-xl rounded-xl animate-pulse">
      <figure className="w-[200px] h-[200px] self-center justify-self-center bg-[#d9d9d9]">
        <div className="w-full h-full bg-gray-300"></div>
      </figure>
      <div className="flex flex-1 flex-col w-full gap[5px]">
        <h1 className="text-[#323643] bg-gray-300 h-6 rounded"></h1>
        <div className="flex flex-col gap-[5px] items-end justify-end flex-1">
          <p className="text-[#3689D7] text-lg font-medium justify-self-start self-start bg-gray-300 h-4 rounded"></p>
          <div className="flex flex-row gap-[10px] w-full">
            <button className="rounded-md flex items-center justify-center h-[40px] flex-1 bg-gray-300"></button>
            <button className="rounded-md flex items-center justify-center w-[40px] h-[40px] bg-orange-300"></button>
          </div>
          <button className="bg-[#3689D7] text-[#F7F7F7] rounded-md flex items-center justify-center h-[40px] w-full"></button>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
