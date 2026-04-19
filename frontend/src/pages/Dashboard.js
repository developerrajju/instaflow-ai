import React, { useEffect, useState } from "react";
import axios from "axios";
import CampaignForm from "../components/CampaignForm";

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    const res = await axios.get("http://localhost:5000/api/campaign/user/123");
    setCampaigns(res.data);
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <CampaignForm />

      <h3>Your Campaigns</h3>
      <ul>
        {campaigns.map((c) => (
          <li key={c._id}>{c.triggerWord} → {c.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
