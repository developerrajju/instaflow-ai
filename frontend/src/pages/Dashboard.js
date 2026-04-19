import React, { useEffect, useState } from "react";
import API from "../api";
import CampaignForm from "../components/CampaignForm";

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    try {
      const res = await API.get("/campaign/user");
      setCampaigns(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch campaigns");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    } else {
      fetchCampaigns();
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <CampaignForm refresh={fetchCampaigns} />

      <h3>Your Campaigns</h3>
      <ul>
        {campaigns.map((c) => (
          <li key={c._id}>
            {c.triggerWord} → {c.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
