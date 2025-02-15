import React, { useState } from 'react';
import { X, FileUp } from 'lucide-react';

function PopUp({ setClose }: { setClose: (value: boolean) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setUploading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile && selectedFile.size > 50 * 1024 * 1024) {
      setError('File size exceeds the maximum limit of 50MB');
      setFile(null);
    } else {
      setFile(selectedFile);
      setError('');
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setUploading(true);
    setError('');
    
    setTimeout(() => {
      setUploading(false);
      setStatus('success');
      console.log('Image Uploaded successfully!');
      setFile(null);
      setStatus('');
      setTimeout(()=>{
        setClose(false);        
      },1000)
      setTimeout(()=>{
        window.location.reload()
      },1500)
    }, 5000);
  };

  return (
    <div className="w-screen h-screen z-10 backdrop-blur-sm left-0 top-0 flex flex-col justify-center items-center absolute">
      <div className="w-[20rem] relative sm:w-[30rem] h-[10rem] sm:h-[12rem] flex justify-center items-center">
        <div className="w-full border-4 bg-white border-green-300 rounded-xl flex-col h-full text-center px-8 flex justify-center items-center">
          {isUploading && <p>Uploading...</p>}
          {status === 'success' && <p>Image uploaded successfully!</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!isUploading && !file && status === '' && (
            <>
              <label htmlFor="image" className="mb-3 px-4 py-2 text-sm font-semibold text-white bg-black hover:bg-zinc-800 flex rounded justify-center items-center cursor-pointer">
                <FileUp size={16} className="mr-[0.3rem]" />
                <span>Upload</span>
              </label>
              <p className="text-sm sm:text-base text-zinc-500">(Maximum file size: 50MB)</p>
            </>
          )}
          {file && !isUploading && !status && (
            <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded" onClick={handleUpload}>
              Confirm Upload
            </button>
          )}
        </div>
        <button className="cursor-pointer absolute top-3 right-3 hover:text-red-500 hover:bg-red-100 text-red-400 bg-red-50 rounded-full p-2" onClick={() => setClose(false)}>
          <X size={16} />
        </button>
        <input id="image" type="file" className="hidden" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default PopUp;