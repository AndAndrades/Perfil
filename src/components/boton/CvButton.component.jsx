import { Download } from "lucide-react";
import useAnalytics from "../../hooks/Query/Firebase/useAnalytics";

const CvButton = ({ className = "hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs font-medium transition-all duration-200" }) => {

    const { trackCvDownload } = useAnalytics();

    const handleDownloadCV = () => {
        trackCvDownload();
    };
    return (
        <a
            href="/CV_Andrew_Andrades.pdf"
            download="CV_Andrew_Andrades.pdf"
            onClick={handleDownloadCV}
            className={className}
            title="Descargar Currículum PDF"
        >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Descargar CV</span>
        </a>
    );
};

export default CvButton;