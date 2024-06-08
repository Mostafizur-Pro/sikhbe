import logo from "@/assets/logo.png";
import { Fragment, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { BsBagFill } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

const navigation = {
  pages: [
    { name: "Hero", href: "/" },
    { name: "Course", href: "/course" },
    { name: "About Us", href: "/about" },
    { name: "Login", href: "/login" },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      href="/login"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Computer Menu */}
      <header className="relative bg-white ">
        <div className="flex justify-between  h-10 items-center  bg-rose-300 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          <div>Discount 20%</div>
          <div>0182934357</div>
        </div>

        <nav
          aria-label="Top"
          className="container mx-auto lg:px-6 px-3 bg-white uppercase"
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white py-2 md:px-2 px-0 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <Image className="h-8 w-auto" src={logo} alt="Logo" />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch ">
                <div className="flex h-full flex-wrap space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center gap-1">
                {/* Search */}
                <div className="flex lg:mr-4">
                  {/* Search */}
                  <LuSearch className="h-7 w-7 text-gray-400 hover:text-gray-500" />
                </div>
                <div className="lg:me-3">
                  {session ? (
                    <div className="flex gap-4">
                      <Link
                        data-tip={`${session?.user?.name}`}
                        className="tooltip tooltip-top hover:tooltip-open lowercase"
                        href={"/dashboard/account"}
                      >
                        <IoPersonSharp className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          signOut();
                        }}
                      >
                        <LuLogOut className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
                      </button>
                    </div>
                  ) : (
                    <Link href={"/login"}>
                      <IoPersonSharp className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                    </Link>
                  )}
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root me-2">
                  <a
                    href="#"
                    className="group -m-2 flex items-center relative "
                  >
                    <BsBagFill
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <div className="absolute -bottom-1 right-3.5 border flex justify-center items-center px-1.5 rounded-full bg-white">
                      <span className="text-xs font-medium  text-gray-700 group-hover:text-gray-800">
                        0
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}