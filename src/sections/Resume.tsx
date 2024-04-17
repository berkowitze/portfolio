import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  return <Document file="/Eli_Berkowitz_Resume.pdf" />;
}
{
  /* {Array.from(new Array(numPages), (el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
        />
      ))}
    </Document> */
}
