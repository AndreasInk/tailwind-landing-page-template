import React from 'react';
import { Link } from 'react-router-dom';
import fav from "../images/favicon.svg"
function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Protoco">
                <img className="h-8" src={fav} alt="Ping Path's Logo, a bold graident representing an iris of an eye" />
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link to="/building" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> · <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/building" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Ping Path</Link>
              </li>
              {/* <li className="mb-2">
                <Link to="/building" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">ARtistry</Link>
              </li>
              <li className="mb-2">
                <Link to="/building" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">AIRobotics</Link>
              </li> */}
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/building" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="https://andreas.craft.me/nnL9M4RftSjD6F" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Guide</Link>
              </li>
              <li className="mb-2">
                <Link to="https://github.com/AndreasInk/tailwind-landing-page-template" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Open Source Website</Link>
              </li>
            </ul>
           
          </div>

          {/* 4th block */}
          </div>
          </div>
          </footer>
  )
}
export default Footer;