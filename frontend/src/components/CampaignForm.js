import React, { useState } from "react";
import axios from "axios";

const CampaignForm = () => {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/campaign/create", {
      userId: "123",
      triggerWord: word,
      message,
    });
    alert("Campaign Created");
  };

  return (
    <div>
      <input placeholder="Trigger" onChange={(e) => setWord(e.target.value)} />
      <input placeholder="Message" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default CampaignForm;
