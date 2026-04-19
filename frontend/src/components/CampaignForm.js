import React, { useState } from "react";
import API from "../api";

const CampaignForm = ({ refresh }) => {
  const [word, setWord] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/campaign/create", {
        triggerWord: word,
        message,
      });

      setWord("");
      setMessage("");
      alert("Campaign Created");

      if (refresh) refresh(); // reload campaigns
    } catch (err) {
      console.error(err);
      alert("Error creating campaign");
    }
  };

  return (
    <div>
      <input
        placeholder="Trigger"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <input
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default CampaignForm;
