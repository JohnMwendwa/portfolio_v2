import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { MenuProps } from "./layout/Navbar";

interface MobileNavProps {
  MenuItems: MenuProps[];
}

const MobileNav = ({ MenuItems }: MobileNavProps) => {
  return (
    <Menu as="div" className="relative sm:hidden">
      <Menu.Button
        aria-label="Menu"
        className="flex items-center px-3 py-2 border rounded border-orange-400 text-white hover:text-orange-200 hover:border-orange-500 focus-visible:ring-2 "
      >
        <svg
          className="fill-current h-5 w-5"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 flex flex-col  mt-2 w-56 bg-opacity-75 origin-top-right rounded-md bg-gray-900/95 shadow-lg backdrop-filter backdrop-blur-sm border  border-orange-500 focus:outline-none z-30 text-sm">
          {MenuItems.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.link}
                  className={`flex w-full px-4 py-2 first-of-type:rounded-t-md ${
                    active && "text-orange-600 bg-orange-100"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {({ active }) => (
              <Link
                href="https://github.com/JohnMwendwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my github profile"
                className={`flex items-center px-4 py-2 border-t border-orange-400 rounded-b-md ${
                  active && "text-orange-600 bg-orange-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  aria-hidden="true"
                  viewBox="0 0 496 512"
                  className={`h-5 w-5 mr-2 ${
                    active ? "fill-black" : "fill-white "
                  }`}
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                Github
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileNav;
