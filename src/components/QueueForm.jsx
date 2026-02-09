import React, { useState } from "react";


const QueueForm = ({setQueueList}) => {
  const [nameInput, setNameInput] = useState("");
  const [serviceInput, setServiceInput] = useState("")
  const [nextToken,setNextToken] = useState(1)

  const addToQueue = ()=>{
    if (!nameInput || !serviceInput) {
      return
    }
    setQueueList(prev=>(
      [...prev,
        {
          // TODO: improve tokenNumber logic
          tokenNumber: prev.length + 1,
          name:nameInput,
          service:serviceInput,
          status:"waiting"
        }
      ]
    ))
    setNameInput("")
    setServiceInput("")
  }

  return (
    <div className="w-full max-w-80 h-fit bg-gray-800 rounded-lg py-5 px-6">
      <h3 className="text-xl font-bold text-blue-500 mb-4">Add to Queue</h3>
      <input
        type="text"
        placeholder="Customer Name"
        value={nameInput}
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
        className="text-white bg-gray-500 p-2 rounded-md w-full  mb-4"
      />
      <select
        className="w-full bg-gray-500 p-2 rounded-md text-white mb-4"
        value={serviceInput} 
        onChange={e=>setServiceInput(e.target.value)}
      >
        <option value="">Select Service</option>
        <option value="Meeting">Meeting</option>
        <option value="Consultation">Consultation</option>
        <option value="Payment">Payment</option>
        <option value="Support">Support</option>
      </select>
      <button className="w-full bg-blue-500 p-2 rounded-md font-medium text-white active:bg-blue-600" onClick={addToQueue}>
        Add to Queue
      </button>
    </div>
  );
};

export default QueueForm;
