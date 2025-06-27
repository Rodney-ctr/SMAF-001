import './globals.css';

export const metadata = {
  title: 'SMAF Construction Ltd',
  description: 'Reliable, professional construction services in Kenya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <header/> 
        <main className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}