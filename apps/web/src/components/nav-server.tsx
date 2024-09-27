import { auth } from '@/auth';
import { Navigation } from '@/components/navigation';
import type { Session } from 'next-auth';

// A server component need to be separated from client component.
// So we pass a value we get from the server by using the props to client

export default async function NavigationServer() {
  const session = await auth();
  return <Navigation session={session as Session} />;
}
