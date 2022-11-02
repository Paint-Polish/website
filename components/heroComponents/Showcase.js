import Image from '../Image'

const Showcase = ({ imageSrc }) => {
  return (
    <div className="z-10">
      <Image src={imageSrc} className="w-136" alt="Showcase item" height="544" width="544" />
    </div>
  )
}

export default Showcase