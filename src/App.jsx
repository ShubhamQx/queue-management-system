import {  useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueList from "./components/QueueList";

const App = () => {
  const [queueList, setQueueList] = useState([]);

  const removeFromQueue = (tokenNumber) => {
    setQueueList((prev) => prev.filter((c) => c.tokenNumber !== tokenNumber));
  };

  const serveCustomer = () => {

    setQueueList((prev) => {
      const servingIndex = prev.findIndex(
        (customer) => customer.status === "serving",
      );
      const waitingIndex = prev.findIndex(
        (customer) => customer.status === "waiting",
      );

      if (servingIndex === -1 && waitingIndex === -1) return prev;

      return prev.map((customer, i) => {
        if (i === servingIndex) {
          return { ...customer, status: "served" };
        } else if (i === waitingIndex) {
          return { ...customer, status: "serving" };
        } else {
          return customer;
        }
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-black/90 pt-20">
        <header className="max-w-6xl mx-auto text-center py-6 px-4 ">
          <h1 className="text-4xl font-bold text-blue-500 mb-2">
            Queue Management System
          </h1>
          <p className="text-gray-400 font-medium">
            Manage your Customers efficiently
          </p>
        </header>
        <main className="flex max-w-6xl h-2/3 mx-auto gap-4">
          <QueueForm setQueueList={setQueueList} />
          <QueueList
            queueList={queueList}
            onRemove={removeFromQueue}
            serveCustomer={serveCustomer}
          />
        </main>
      </div>
    </>
  );
};

export default App;
