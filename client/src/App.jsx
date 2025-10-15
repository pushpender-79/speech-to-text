export default function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-4xl font-bold text-blue-600">
        Speech-to-Text Project
      </h1>
      <p className="text-gray-700">
        Welcome! This app will convert audio to text using Deepgram API.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Upload Audio
      </button>
    </div>
  );
}
