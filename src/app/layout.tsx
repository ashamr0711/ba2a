import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'BA2A Landing',
  description: 'BA2A landing page with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
