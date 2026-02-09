import React, { useState } from "react";
import QueueItem from "./QueueItem";

const QueueList = ({ queueList, onRemove, serveCustomer }) => {

  const currentServing = queueList.find((c) => c.status === "serving") || null;

  return (
    <div className="w-full bg-gray-800 rounded-lg py-5 px-6 h-full overflow-hidden flex flex-col ">
      <h2 className="text-xl text-white font-semibold text-center mb-4">
        Queue List
      </h2>
      <div className="flex justify-between items-center mb-4">
        <div className="text-white font-semibold ">
          Current Serving:{" "}
          {currentServing === null ? '❌' : currentServing.tokenNumber}
        </div>
        <button
          className="bg-green-500 px-4 py-2 font-semibold text-base rounded-md text-white"
          onClick={serveCustomer}
        >
          {currentServing === null ? "Start serving" : "serve next"}
        </button>
      </div>
      <div className="flex flex-col gap-4  flex-1 overflow-y-auto no-scrollbar">
        {queueList.map((item) => (
          <QueueItem 
          key={`${item.tokenNumber}`} 
          customer={item}
          onRemove={onRemove}/>
        ))}
      </div>
    </div>
  );
};

export default QueueList;
