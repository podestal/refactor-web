import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, X } from 'lucide-react';

interface Props {
  onFileDrop: (files: FileList) => void;
};

const Dropzone = ({ onFileDrop }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      setFileName(e.dataTransfer.files[0].name);
      onFileDrop(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      onFileDrop(e.target.files);
    }
  };

  const clearFile = () => {
    setFileName(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl transition-colors duration-300 
          ${isDragging ? 'border-blue-500 bg-blue-100/20 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'} 
          p-8 w-full max-w-xl cursor-pointer`}
      >
        <input
          type="file"
          onChange={handleFileSelect}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <UploadCloud className="w-12 h-12 text-gray-500 dark:text-gray-400" />
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
            {isDragging ? 'Drop files here...' : 'Drag & drop ZIP file or click to upload'}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Only .zip files are supported</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {fileName && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 shadow-sm"
          >
            <span className="text-sm text-gray-700 dark:text-gray-200 truncate">{fileName}</span>
            <button onClick={clearFile} className="text-gray-500 hover:text-red-500 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropzone
