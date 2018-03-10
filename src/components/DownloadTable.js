import React from "react";
import { Table } from "react-bootstrap";

const downloadHref =
  "https://github.com/RSG-Group/RSG-Chess-desktop/releases/download/0.0.1/installation.txt";

const sourceHref =
  "https://github.com/RSG-Group/RSG-Chess-desktop/archive/master.zip";

const DownloadTable = () => (
  <Table striped responsive bordered>
    <thead>
      <tr>
        <th>Android</th>
        <th colSpan="2">Windows</th>
        <th colSpan="2">Linux</th>
        <th colSpan="2">macOS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ width: "200px" }}>
          <a href="https://play.google.com/store/apps/details?id=com.rsg.chess&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              height="75"
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
            />
          </a>
        </td>
        <td>
          <a href={downloadHref}>64-bit (.exe)</a>
        </td>
        <td>
          <a href={downloadHref}>64-bit (.zip)</a>
        </td>
        <td>
          <a href={downloadHref}>x64</a>
        </td>
        <td>
          <a href={downloadHref}>ARM v8</a>
        </td>
        <td>
          <a href={downloadHref}>64-bit (.pkg)</a>
        </td>
        <td>
          <a href={downloadHref}>32-bit (.pkg)</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href={"https://github.com/RSG-Group/RSG-Chess-mobile/archive/master.zip"}>Source (.zip)</a>
        </td>
        <td colSpan="6">
          <a href={sourceHref}>Source (.zip)</a>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default DownloadTable;
