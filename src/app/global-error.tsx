'use client';

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const revalidate = 0;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div suppressHydrationWarning>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}