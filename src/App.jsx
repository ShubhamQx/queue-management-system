import { useEffect, useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueList from "./components/QueueList";

const App = () => {
  const [queueList, setQueueList] = useState(() => {
    try {
      const stored = localStorage.getItem("queue");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return [];
    }
  });
  const removeFromQueue = (itemId) => {
    setQueueList((prev) => prev.filter((c) => c.id !== itemId));
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
  const clearServedFromQueue = () => {
    setQueueList((prev) =>
      prev.filter((customer) => customer.status !== "served"),
    );
  };

  useEffect(() => {
    localStorage.setItem("queue", JSON.stringify(queueList));
  }, [queueList]);

  return (
    <>
      <div className="w-full min-h-screen lg:h-screen bg-black/90 py-5 px-4 md:pt-20">
        <header className="max-w-6xl mx-auto text-center py-6 px-4 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 mb-2">
            Queue Management System
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-medium">
            Manage your Customers efficiently
          </p>
        </header>
        <main className="container max-w-6xl lg:h-2/3  mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 ">
          <QueueForm
            setQueueList={setQueueList}
            queueList={queueList}
          />
          <QueueList
            queueList={queueList}
            onRemove={removeFromQueue}
            serveCustomer={serveCustomer}
            clearServed={clearServedFromQueue}
          />
        </main>
      </div>
    </>
  );
};

export default App;
