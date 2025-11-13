// https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
export default function ImageUpload({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    if (onFileSelect) {
      onFileSelect(selectedFile);
    }

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, onFileSelect]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <Input
        type="file"
        onChange={onSelectFile}
        className="text-stone-700 file:text-orange-500 border border-orange-500 text-sm sm:text-base"
      />
      {selectedFile && <img className="pt-2 pb-2 rounded-4xl w-full h-auto max-h-64 sm:max-h-96 object-cover" src={preview} />}
    </div>
  );
}
