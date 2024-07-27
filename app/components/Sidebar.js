'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu className="text-2xl text-purple-800" />
      </button>
      <div
        className={`h-[100vh] bg-purple-800 text-white w-64 p-6 fixed lg:relative  z-50 lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-2xl font-bold mb-8">Neolli</h1>
        <ul>
          <li className="mb-4">
            <Link href="/">
              <div className="flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-700 transition">
                <span className="ml-2">Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/shops">
              <div className="flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-700 transition">
                <span className="ml-2">Shops</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/products">
              <div className="flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-700 transition">
                <span className="ml-2">Products</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/categories">
              <div className="flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-700 transition">
                <span className="ml-2">Categories</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/locations">
              <div className="flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-700 transition">
                <span className="ml-2">Locations</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/areas">
              <div className="flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-700 transition">
                <span className="ml-2">Areas</span>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/customers">
              <div className="flex items-center cursor-pointer p-2 rounded-md hover:bg-purple-700 transition">
                <span className="ml-2">Customers</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
