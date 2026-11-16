
import { useRef, useState } from "react";
import {
  UploadCloud,
  FileArchive,
  X,
  FolderGit2,
  CheckCircle2
} from "lucide-react";

const ImportRepository = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (!selectedFile.name.toLowerCase().endsWith(".zip")) {
      setError("Please select a valid ZIP file.");
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const formatSize = (size) => {
    return size < 1024 * 1024
      ? `${(size / 1024).toFixed(1)} KB`
      : `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
<div className="w-full min-h-[calc(100vh-84px)] bg-[#F1F5F9] text-black  p-5 sm:p-8">

      {submitted ? (

        /* Success Screen */
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center py-24 text-center">

          <CheckCircle2 size={60} className="text-green-500 mb-5" />

          <h1 className="text-2xl font-bold mb-2">
            Repository Submitted!
          </h1>

          <p className="text-gray-400 mb-6">
            Your repository has been submitted successfully.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setFile(null);
              setError("");
            }}
            className="px-6 py-2.5 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
          >
            Import Another Repository
          </button>

        </div>

      ) : (

        /* Import Form */
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">

              <div className="p-3 bg-cyan-500/10 rounded-xl">
                <FolderGit2 className="text-cyan-500" size={26} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  Import Repository
                </h1>

                <p className="text-sm text-gray-400">
                  Bring your existing project to Haki.
                </p>
              </div>

            </div>
          </div>

          {/* Upload Box */}
          <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-5 sm:p-8">

            <h2 className="text-lg font-semibold mb-2 text-white ">
              Upload your repository
            </h2>

            <p className="text-sm text-gray-400 mb-6">
              Select your project ZIP file from your computer.
            </p>

            {/* Drop Zone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 sm:p-12 text-center cursor-pointer transition
                ${
                  dragging
                    ? "border-gray-500 bg-blue-500/10"
                    : "border-gray-700 hover:border-gray-500 hover:bg-[#1c2430]"
                }`}
            >

              <input
                ref={fileInputRef}
                type="file"
                accept=".zip,application/zip"
                className="hidden"
                onChange={(e) => {
                  handleFile(e.target.files[0]);
                  e.target.value = "";
                }}
              />

              <div className="flex justify-center mb-5">
                <div className="p-4 bg-blue-500/10 rounded-full">
                  <UploadCloud size={38} className="text-cyan-500" />
                </div>
              </div>

              <h3 className="text-base font-semibold mb-2 text-white">
                Drag and drop your ZIP file here
              </h3>

              <p className="text-sm text-white mb-5">
                or click below to browse your files
              </p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-sm font-semibold transition"
              >
                Browse Files
              </button>

              <p className="text-xs text-white mt-5">
                Supported format: ZIP
              </p>

            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-400 mt-4">
                {error}
              </p>
            )}

            {/* Selected File */}
            {file && (
              <div className="mt-6 p-4 bg-[#0d1117] border border-gray-700 rounded-xl">

                <div className="flex items-center gap-3">

                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <FileArchive size={25} className="text-cyan-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-semibold truncate">
                      {file.name}
                    </p>

                    <p className="text-xs text-white mt-1">
                      {formatSize(file.size)}
                    </p>
                  </div>

                  <CheckCircle2 size={20} className="text-green-500" />

                  <button
                    onClick={() => setFile(null)}
                    className="p-2 text-gray-400 hover:text-red-400"
                    aria-label="Remove file"
                  >
                    <X size={19} />
                  </button>

                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-7 pt-6 border-t border-gray-800">

              <p className="text-xs text-gray-500">
                Your repository will be imported after processing.
              </p>

              <button
                disabled={!file}
                onClick={() => setSubmitted(true)}
                className="w-full sm:w-auto px-7 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed rounded-lg text-sm font-semibold transition"
              >
                Import Repository
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ImportRepository;
