import AdminLayout from '@/components/layout/AdminLayout';

export default function CMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}