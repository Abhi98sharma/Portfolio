import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <footer class="text-gray-600 body-font bg-[#111111]">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/" >
            <img className="w-36 h-20 z-20" src="/assets/name-logo.svg" alt="logo" />
          </Link>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 All right reserved</p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <img width={24} src="/socials-icon/github.png" alt="" />
            </a>
            <a class="ml-3 text-gray-500">
              <img width={24} src="/socials-icon/linkedin.png" alt="" />
            </a>
            <a class="ml-3 text-gray-500">
              <img width={24} src="/socials-icon/twitter.png" alt="" />
            </a>
          </span>
        </div>
        <div className='text-center '>
          <h1>Designed & Built by Abhijeet Sharma</h1>
        </div>
      </footer>
    </>
  )
}

