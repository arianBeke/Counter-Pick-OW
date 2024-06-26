"use client"
import { React, useState } from 'react'; 
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Tank', href: '../../pages/Tank' },
  { name: 'Damage', href: '../../pages/Damage' },
  { name: 'Support', href: '../../pages/Support' },
  { name: 'Favorites', href: '../../pages/Favorites' },
];
const mobileNavigation = [
  { name: 'Tank', href: '../../pages/Tank' },
  { name: 'Damage', href: '../pages/Damage' },
  { name: 'Support', href: '../pages/Support' },
  { name: 'Favorites', href: '../pages/Favorites' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/pages/signin'); 
    },
  });

  return (
    <>
    <header className=" pl-3">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
            <Link href="../../pages/Hero">
              <span className="w-full text-xl font-bold text-[#00df9a] cursor-pointer">Counter Pick</span>
            </Link>
        </div> 
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-l font-semibold leading-6 hover:text-[#00df9a]  text-white">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden space-x-4 lg:flex lg:flex-1 lg:justify-end">
          <div className='text-white mt-2'>{session?.data?.user?.email}</div>
          <button className='rounded-lg w-20 h-10 bg-[#00df9a] text-gray-700 hover:bg-gray-700 hover:text-[#00df9a] hover:duration-300' onClick={() => signOut()}>Logout</button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#282c34] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className="w-full text-s font-bold text-[#00df9a] cursor-pointer">Counter Pick</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {mobileNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className=" mt-60 space-y-2 flex flex-col items-center justify-center">
                <div className='text-white mt-2'>{session?.data?.user?.email}</div>
                <button className="rounded-lg justify-center w-20 h-10 bg-[#00df9a] text-gray-700 hover:bg-gray-700 hover:text-[#00df9a] hover:duration-300" onClick={() => signOut()}>Log Out</button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </>
  )
}

Navbar.requireAuth = true