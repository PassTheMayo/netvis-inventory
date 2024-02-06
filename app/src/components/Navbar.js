'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogOutIcon from '@/assets/icons/log-out.svg';
import SettingsIcon from '@/assets/icons/settings.svg';

export default function Navbar() {
    const path = usePathname();

    return (
        <nav className="py-5 border-b border-b-neutral-200 bg-white">
            <div className="container mx-auto max-w-6xl">
                <ul className="flex items-center gap-5">
                    <li>
                        <span className="text-lg font-semibold">Netvision Inventory</span>
                    </li>
                    <li className="ml-5">
                        <Link href="/">
                            <span className={path === '/' ? 'text-black' : 'text-neutral-500 hover:text-black'}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/inventory">
                            <span className={path.startsWith('/inventory') ? 'text-black' : 'text-neutral-500 hover:text-black'}>Inventory</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/reports">
                            <span className={path.startsWith('/reports') ? 'text-black' : 'text-neutral-500 hover:text-black'}>Reports</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings">
                            <span className={path.startsWith('/settings') ? 'text-black' : 'text-neutral-500 hover:text-black'}>Settings</span>
                        </Link>
                    </li>
                    <li className="ml-auto">
                        <span className="text-sm">
                            <span className="text-neutral-500">Logged in as </span>
                            <span className="font-semibold">Jacob Gunther</span>
                        </span>
                    </li>
                    <li>
                        <Link href="/admin">
                            <div className="flex items-center gap-2 px-2 py-1 rounded text-neutral-500 hover:text-black border border-neutral-300 hover:border-black text-sm">
                                <span>Admin</span>
                                <SettingsIcon width="12" height="12" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link href="/auth/logout">
                            <div className="flex items-center gap-2 px-2 py-1 rounded border border-neutral-300 hover:border-red-500 text-sm text-red-500">
                                <span>Log out</span>
                                <LogOutIcon width="12" height="12" />
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}