import { redirect } from 'next/navigation'

export default function AdminPage() {
  // Redirigir al dashboard admin
  redirect('/admin/dashboard')
}