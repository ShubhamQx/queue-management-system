const QueueItem = ({ customer, onRemove }) => {
  const { name, service, status, tokenNumber,id } = customer;
  const statusColor =
    {
      waiting: "text-amber-600",
      serving: "text-green-600",
      served: "text-gray-800",
    }[status] || "text-gray-800";

  return (
    <div className="bg-gray-300 rounded-md  flex ">
      <span className="text-xl font-bold flex items-center justify-center bg-gray-500 rounded-l-md text-white py-2 px-4">
        {tokenNumber}
      </span>
      <div className="flex-1 flex justify-between items-center px-3 py-2">
        <div>
          <h3 className="font-semibold text-lg capitalize">{name}</h3>
          <div className="flex items-center gap-2">
            <h4 className="text-base font-semibold text-gray-600">
              Service:{" "}
              <span className="text-gray-800 font-bold">{service}</span>
            </h4>
            <h4 className="text-base font-semibold text-gray-600">
              Status:{" "}
              <span className={`font-bold  ${statusColor}`}>{status}</span>
            </h4>
          </div>
        </div>
        <button
          className="bg-red-500 active:bg-red-600 px-2 py-1 font-bold text-base rounded-md
          cursor-pointer
          disabled:bg-gray-400/80
          disabled:text-black/60
          disabled:cursor-not-allowed
          "
          disabled={status !== "waiting"}
          onClick={() => onRemove(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default QueueItem;
