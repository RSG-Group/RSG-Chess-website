import React from "react";
import { Table } from "react-bootstrap";
import {
  downloadHeadStructure,
  downloadBodyStructure,
  downloadSourceStructure
} from "../websiteConfig";

const DownloadTable = () => (
  <Table striped responsive bordered>
    <thead>
      <tr>
        {downloadHeadStructure.map((ev, i) => {
          return (
            <th key={i} colSpan={ev.colSpan}>
              {ev.text}
            </th>
          );
        })}
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
        {downloadBodyStructure.map((ev, i) => {
          return (
            <td key={i}>
              <a href={ev.href}>{ev.text}</a>
            </td>
          );
        })}
      </tr>
      <tr>
        {downloadSourceStructure.map((ev, i) => {
          return (
            <td colSpan={ev.colSpan} key={i}>
              <a href={ev.href}>{ev.text}</a>
            </td>
          );
        })}
      </tr>
    </tbody>
  </Table>
);

export default DownloadTable;
