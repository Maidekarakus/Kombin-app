export default function OutfitGenerator() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-sky-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600">Kombin Oluştur</h2>
        <p className="mb-4 text-gray-600">Yüklediğiniz kıyafetlere göre kombin önerileri burada listelenecek.</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="h-32 bg-gray-100 rounded shadow-inner flex items-center justify-center text-gray-400">Üst</div>
          <div className="h-32 bg-gray-100 rounded shadow-inner flex items-center justify-center text-gray-400">Alt</div>
        </div>
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition duration-300">
          Yeni Kombin Oluştur
        </button>
      </div>
    </div>
  );
}