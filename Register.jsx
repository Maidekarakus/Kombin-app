export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Kayıt Ol</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="password" placeholder="Şifre" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="password" placeholder="Şifre Tekrar" className="w-full p-2 mb-6 border border-gray-300 rounded" />
        <button className="w-full bg-teal-500 text-white p-2 rounded">Kayıt Ol</button>
      </div>
    </div>
  );
}