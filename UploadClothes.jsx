import { useState } from "react";

export default function UploadClothes() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert("Kıyafet yüklendi: " + file.name);
      setFile(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200">
      <div className="bg-white p-10 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Kıyafet Yükle</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full mb-4"
        />
        <button
          onClick={handleUpload}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Yükle
        </button>
      </div>
    </div>
  );
}