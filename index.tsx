import Head from 'next/head';
import BrandForm from '../components/BrandForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Soufflé Test Kitchen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto max-w-6xl p-6 space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold">Soufflé Test Kitchen</h1>
          <p className="text-sm text-gray-600">Single-brand evaluation • Bubble map of adjacent opportunities • JSON/CSV export</p>
        </header>
        <BrandForm />
        <footer className="pt-6 text-xs text-gray-500">© {new Date().getFullYear()} Soufflé Studios</footer>
      </main>
    </>
  );
}
