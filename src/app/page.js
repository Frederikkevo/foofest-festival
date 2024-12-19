import Header from '../components/Header';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen p-8 bg-cover bg-center" style={{ backgroundImage: "url('/images/forside.webp')" }}>
      <Header />

    </main>
  );
}
