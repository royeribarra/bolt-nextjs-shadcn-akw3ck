import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the master dashboard by default
    router.push('/admin/master');
  }, [router]);

  return null; // This page won't render anything as it immediately redirects
}