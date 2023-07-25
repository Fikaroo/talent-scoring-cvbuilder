import TemplateOne from "../../components/ResumeTemplates/TemplateOne";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const Resume = () => {
  return (
    <div>
      {/* <h1 className="p-2 text-3xl font-semibold text-center">Cv Builder</h1> */}

      {/* <PDFDownloadLink document={<TemplateOne />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink> */}

      {/* <PDFViewer showToolbar={false} className="w-1/2 min-h-[800px]">
        <TemplateOne />
      </PDFViewer> */}

      <div className="grid grid-cols-3 p-10">
        <TemplateOne />
      </div>
    </div>
  );
};

export default Resume;
