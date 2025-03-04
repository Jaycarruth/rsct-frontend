import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)
      .then(response => setMessage(response.data))
      .catch(error => setMessage("Error loading data"));
  }, []);

  return (
    <div>
      <h1>RSCT Website</h1>
      <p>{message}</p>
    </div>
  );
}

