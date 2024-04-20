import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";

const RESUME_LINK = "/Eli_Berkowitz_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  return (
    <div className="size-full">
      <Document
        file={RESUME_LINK}
        className="hidden h-full rounded-md p-2 md:block"
      >
        <Page
          className="resume-shadow mx-auto h-full w-fit overflow-auto rounded-md"
          scale={1.5}
          pageNumber={1}
          renderAnnotationLayer={false}
        >
          <a
            className="absolute right-3 top-2 z-20 rounded-md bg-white/80"
            href={RESUME_LINK}
          >
            Open in new tab &#8599;
          </a>
        </Page>
      </Document>
      <div className="md:hidden">
        My Resume can be accessed <a href={RESUME_LINK}>here.</a>
      </div>
    </div>
  );
}
