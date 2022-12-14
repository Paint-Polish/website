import Image from '../Image'
import Link from 'next/link'

const DisplayMedium = ({ imageSrc, title, subtitle, link }) => {
  return (
    <div className="
    mb-4 lg:mb-0
    bg-gray-50 p-8 pb-0 hover:bg-gray-100">
      <Link href={`${link}`}>
        <a aria-label={title}>
          <div className="flex flex-column justify-center items-center">
            <Image src={imageSrc} alt={title} height="1024" width="1024"/>
          </div>
          <div className="mb-8">
            <p className="text-3xl font-semibold mb-1">{title}</p>
            <p className="text-xs text-gray-700">{subtitle}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default DisplayMedium;