'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return null;

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/dashboard" className="flex items-center gap-2 hover:underline">
          {session.user.image && (
            <Image src={session.user.image} alt="avatar" width={32} height={32} className="rounded-full" />
          )}
          <span className="font-medium text-white/90">{session.user.name}</span>
        </Link>
        <button onClick={() => signOut()} className="btn bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold ml-2">Logout</button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn('discord')} className="btn bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
      Accedi con Discord
    </button>
  );
} 