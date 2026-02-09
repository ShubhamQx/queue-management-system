import React from "react";

const QueueItem = ({ customer, onRemove }) => {
  const { name, service, status, tokenNumber } = customer;
  const statusColor =
    {
      waiting: "text-amber-600",
      serving: "text-green-600",
      served: "text-blue-600",
    }[status] || "text-gray-800";

  return (
    <div className="bg-gray-300 rounded-md py-2 px-3 flex justify-between items-center ">
      <div>
        <h3 className="font-semibold text-lg capitalize">{name}</h3>
        <div className="flex items-center gap-2">
          <h4 className="text-base font-semibold text-gray-600">
            Service: <span className="text-gray-800 font-bold">{service}</span>
          </h4>
          <h4 className="text-base font-semibold text-gray-600">
            Status:{" "}
            <span className={`font-bold  ${statusColor}`}>{status}</span>
          </h4>
          <h4>{tokenNumber}</h4>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-red-500 px-2 py-1 font-bold text-base rounded-md"
          onClick={() => onRemove(tokenNumber)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default QueueItem;
