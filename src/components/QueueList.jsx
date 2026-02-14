import React, { useState } from "react";
import QueueItem from "./QueueItem";

const QueueList = ({ queueList, onRemove, serveCustomer, clearServed }) => {
  const currentServing = queueList.find((c) => c.status === "serving") || null;

  return (
    <div className="w-full bg-gray-800 rounded-lg py-5 px-6 h-full overflow-hidden flex flex-col ">
      <h2 className="text-xl text-white font-semibold text-center mb-4 ">
        Queue List
      </h2>
      <div className="flex justify-between items-center mb-4">
        <div className="text-white font-semibold ">
          Current Serving:{" "}
          {currentServing === null ? "❌" : currentServing.tokenNumber}
        </div>
        <div className="flex gap-4">
          <button
            className="bg-green-500 active:bg-green-600 px-3 py-2 font-semibold text-base rounded-md text-white 
          cursor-pointer disabled:bg-gray-500
          disabled:text-white/70
          disabled:cursor-not-allowed"
            onClick={serveCustomer}
            disabled={
              queueList.length <= 0 ||
              !queueList.some(
                (customer) =>
                  customer.status === "waiting" ||
                  customer.status === "serving",
              )
            }
          >
            {currentServing === null ? "Start serving" : "serve next"}
          </button>
          <button
            className="text-white bg-blue-500 active:bg-blue-600 py-2 px-3 font-semibold text-base 
            cursor-pointer rounded-md disabled:bg-gray-500
          disabled:text-white/70
          disabled:cursor-not-allowed"
            onClick={clearServed}
            disabled={!queueList.some((c) => c.status === "served")}
          >
            Clear Served
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4  flex-1 overflow-y-auto no-scrollbar">
        {queueList.length <= 0 ? (
          <p className="text-lg text-white text-center pt-8 justify-center">
            Queue is empty for now
          </p>
        ) : (
          queueList.map((item) => (
            <QueueItem key={item.id} customer={item} onRemove={onRemove} />
          ))
        )}
      </div>
    </div>
  );
};

export default QueueList;
