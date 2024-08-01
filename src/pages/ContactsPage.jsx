import React, { useState } from "react";

const ContactsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields");
      return;
    }

    // Here you can add the logic to send the message
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Reset fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full flex flex-col items-center max-w-xs md:max-w-md lg:max-w-xl ">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactsPage;
