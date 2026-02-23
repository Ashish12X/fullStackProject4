import { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const arr = ["Aman", "Arun", "Amit", "Rohan", "pranit", "pranav"];

  let student = arr.filter((a) => a.toLowerCase().includes(val.toLowerCase()));

  return (
    <div className="flex flex-col h-screen w-full items-center mt-10">
      <h2 className="text-xl">Demo to show Search</h2>
      <input
        type="text"
        placeholder="Enter Key to search"
        className="border  w-[30vw] p-2 border-gray-400 rounded mt-2"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <div className="max-w-md mx-auto mt-6 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Student List
        </h2>
        <ul className="space-y-3">
          {student.map((a, i) => (
            <li
              key={i}
              className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition duration-200"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
