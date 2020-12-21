import * as React from "react";
import { Document, Page } from "react-pdf";
import resume from "../images/Resume_Michals_V10.pdf";

export default function Test() {
  return (
    <Document file={resume}>
      <Page pageNumber={1} />
    </Document>
  );
}
