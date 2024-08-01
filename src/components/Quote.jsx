import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.get("https://type.fit/api/quotes");
      setQuotes(res.data);
      updateRandomQuote(res.data);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatAuthor = (authorString) => {
    return authorString ? authorString.split(",")[0] : "Unknown";
  };

  const updateRandomQuote = (quotesArray) => {
    let newQuote;
    do {
      newQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    } while (newQuote.text === quote);

    setQuote(newQuote.text);
    setAuthor(formatAuthor(newQuote.author));
  };

  const getNextQuote = () => {
    updateRandomQuote(quotes);
  };

  return (
    <div className=" p-4 mx-auto mt-3 text-center rounded-lg">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <>
          <div className="flex flex-col mx-auto text-base md:text-lg border-yellow-500 border p-4 rounded-lg mb-4 max-w-xs sm:max-w-md md:max-w-lg">
            <p>"{quote}"</p>
            <p>~ {author}</p>
          </div>
          <button
            onClick={getNextQuote}
            className="border rounded-md px-2 py-1 mt-2 text-base md:text-lg hover:bg-blue-500 border-blue-500"
          >
            Another Quote
          </button>
        </>
      )}
    </div>
  );
}

export default Quote;
