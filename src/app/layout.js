export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
