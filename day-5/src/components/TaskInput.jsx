import { useState } from "react";

export default function TaskInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const submitButton = (e) => {
    e.preventDefault();
    const registerData = { firstName, lastName, gender };
    console.log(registerData);
    setFirstName("");
    setLastName("");
    setGender("");
  };

  return (
    <div className="font-mono">
      <h1 className="mb-3 text-xl">Registration Form</h1>
      <form onSubmit={submitButton}>
        <label className="block">First Name:</label>
        <input
          type="text"
          className="mt-3 rounded-md max-w-md border-gray-300 shadow-sm sm:text-sm p-2 border"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="block mt-3">Last Name:</label>
        <input
          type="text"
          className="mt-3 rounded-md border-gray-300 shadow-sm text-sm p-2 border"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="block mt-3">Gender:</label>
        <select
          className="rounded-md border-gray-300 border p-2 mt-3"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <button
          className="border px-3 py-1 mt-6 bg-purple-600 text-white rounded-md cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
