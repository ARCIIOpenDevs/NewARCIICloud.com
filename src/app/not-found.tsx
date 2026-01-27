// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>This page could not be found.</p>
    </div>
  );
}