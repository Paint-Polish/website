import Image from 'next/image'

const ImageComponent = ({ src, ...props}) => {
  return <Image src={src} {...props} />
}

export default ImageComponent
