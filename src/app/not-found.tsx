import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050507] px-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Project not found.</h1>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Back home</Link>
      </div>
    </main>
  );
}
