export default function Home() {
  return (
    <main className="p-8 bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <Header />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary text-3xl font-bold mt-6">Welcome to Foofest!</h2>
        <p className="mt-4">Join us for an unforgettable experience of music, art, and community.</p>
      </div>
    </main>
  );
}


