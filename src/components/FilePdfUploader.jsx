import React, { useCallback, useState } from "react";

const FilePdfUploader = ({
  setFileElement,
  FileElement,
  acceptFiles,
  defaultUrl,
  label,
  required,
}) => {
  const [sourceFile, setSourceFile] = useState(defaultUrl);
  const onFileDrop = useCallback(
    (e) => {
      const target = e.target;
      if (!target.files) return;
      const newFile = Object.values(target.files).map((file) => file);

      setFileElement(newFile[0]);

      setSourceFile(newFile[0].name);
    },

    []
  );
  return (
    <div className="flex flex-col items-center justify-center mt-3 w-full">
      <div className="mb-4 w-full truncate">
        <label className="mt-2 leading-normal px-4 py-2">
          {sourceFile !== "" && FileElement !== null ? sourceFile : ""}
        </label>
      </div>
      <label className="cursor-pointer mt-6">
        <span className="mt-2 leading-normal px-4 py-2 text-white bg-Teal hover:bg-blue-500 focus:outline-none focus:ring focus:ring-primary focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark rounded-full">
          {label}
          {required ? <span className="text-red-600">*</span> : null}
        </span>
        <input
          type="file"
          className="hidden"
          //   onBlur={onBlur}
          onChange={onFileDrop}
          accept={acceptFiles}
        />
      </label>
    </div>
  );
};

export default FilePdfUploader;
