export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-600 hover:underline">Go back to homepage</a>
    </div>
  );
}