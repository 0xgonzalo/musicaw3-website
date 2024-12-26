import Image from "next/image"
import Link from 'next/link'

export default function Drop({ id, title, location, description, link }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-[48px] my-16 md:my-32">
        <h3 className="font-stretchFont text-4xl md:text-8xl mb-4 md:mb-0" id={id}>{id}</h3>
        <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative flex flex-col md:flex-row  items-center justify-center cursor-pointer gap-8 group" >
          <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 md:p-8 ">
              <Image
                src={`${location}`}
                fill
                className="object-cover blur-md brightness-75 md:m-4"
                alt="Background blur effect"
              />
          </div>
           
          <div className=" relative md:flex items-center gap-8">
              <Image
                src={`${location}`}
                width={336}
                height={336}
                alt="Picture of the author"
              />
            <div>
              <h3 className="font-stretchFont text-2xl md:text-5xl mt-8 md:mt-0">{title}</h3>
              <p className="max-w-[320px] md:max-w-[384px] text-center md:text-left my-4 font-light text-[12px]">{description}</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}