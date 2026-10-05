export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12" aria-busy="true">
      <div className="mb-8 h-72 animate-pulse rounded-3xl bg-brand-dark-blue/15" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="h-80 animate-pulse rounded-2xl bg-white" />
        <div className="h-80 animate-pulse rounded-3xl bg-white lg:col-span-2" />
      </div>
    </main>
  );
}
