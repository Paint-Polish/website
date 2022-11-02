import Image from 'next/image'
import Link from 'next/link'
import { slugify } from '../utils/helpers'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { navItemLength } from '../ecommerce.config'
import Footer from '../components/Footer'
import MessengerChat from '../components/MessengerChat'

export default function Layout({ children, categories }) {
  if (categories.length > navItemLength) {
    categories = categories.slice(0, navItemLength)
  }
  return (
    <div>
      <nav>
        <div className="flex justify-center">
          <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          ">
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link href="/">
                <a aria-label="Home">
                  <Image src="/logo.png" alt="logo" width="96" height="50" />
                </a>
              </Link>
            </div>
            <div className="flex flex-wrap mt-1">
              <Link href="/">
                <a aria-label="Home">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  ">
                  Home
                  </p>
                </a>
              </Link>
              <Link href="/collections">
                <a aria-label="All collections">
                  <p className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  ">
                  Collections
                  </p>
                </a>
              </Link>

              {/* {
                categories.map((category, index) => (
                  <Link
                    href={`/category/${slugify(category)}`}
                    key={index}
                  >
                    <a aria-label={category}>
                      <p className="
                          sm:mr-8 sm:mb-0
                          mb-4 text-left text-smaller mr-4
                        ">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </p>
                    </a>
                  </Link>
                ))
              } */}

            </div>
          </div>
        </div>
      </nav>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <Footer/>
      <MessengerChat/>
      <ToastContainer autoClose={3000} />
    </div>
  )
}