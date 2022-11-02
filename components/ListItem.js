import React from 'react'
import Link from 'next/link'
import DENOMINATION from '../utils/currencyProvider'
import Image from './Image'

const ListItem = ({ link, title, imageSrc, price }) =>  (
  <div className="
    w-100
    md:w-1/2
    lg:w-1/4
    p1 sm:p-2
  ">
    <Link href={`${link}`}>
      <a aria-label={title}>
        <div className="flex justify-center items-center bg-gray-50 hover:bg-gray-100">
          <div className="py-4 px-4 flex flex-column justify-center items-center">
            <Image alt={title} src={imageSrc} height="1024" width="1024"/>
          </div>
        </div>
      </a>
    </Link>
    <div>
      <p className="m-4 text-center text-l font-semibold mb-1">{title}</p>
      <p className="text-center text-gray-700 mb-4">{`${DENOMINATION}${price}`}</p>
    </div>
  </div>
)

export default ListItem