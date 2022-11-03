import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a href="https://www.facebook.com/paintpolish.official/">
                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FontAwesomeIcon icon={faFacebook} />
                </button>
              </a>
              <a href="https://www.instagram.com/paintpolish.official/">
                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FontAwesomeIcon icon={faInstagram} />
                </button>
              </a>
              <a href="https://www.tiktok.com/@paintpolish.official">
                <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <FontAwesomeIcon icon={faTiktok} />
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm mb-2">Quick Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="block pb-2 text-xs" href="https://shopee.ph/paintpolishph">Shopee</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-xs" href="https://www.lazada.com.ph/shop/paint-polish">Lazada</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-xs" href="/faq">FAQs</a>
                  </li>
                  {/* <li>
                    <a className="block pb-2 text-xs" href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-xs" href="/contact">Contact</a>
                  </li>
                  <li>
                    <a className="block pb-2 text-xs" href="/faq">FAQs</a>
                  </li> */}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-sm mb-2">Paint Polish</span>
                <ul className="list-unstyled">
                  <li>
                    <span className="block pb-2 text-xs">paintpolish.official@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <span className="block text-gray-700 text-xs">
              Copyright © 2022 Paint Polish. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}