import React from "react";
import DownloadTable from "../../components/DownloadTable";
import { Link } from "react-router";
import "./index.css";

const Download = () => (
  <div id="download-container">
    <DownloadTable />
    <Link to="/">{"<<"} Go back</Link>
  </div>
);

export default Download;
