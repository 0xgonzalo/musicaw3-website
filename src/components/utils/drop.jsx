import Image from "next/image"
import Link from 'next/link'

export default function Drop({ id, title, location, description, link }) {
  return (
    <div>
      <div className="flex justify-center items-center gap-[48px] my-32">
        <h3 className="font-stretchFont text-8xl">{id}</h3>
        <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative flex items-center cursor-pointer gap-8 group" id={id}>
          <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 p-8 ">
              <Image
                src={`${location}`}
                fill
                className="object-cover blur-md brightness-75 m-4"
                alt="Background blur effect"
              />
          </div>
           
          <div className="relative flex items-center gap-8">
              <Image
                src={`${location}`}
                width={336}
                height={336}
                alt="Picture of the author"
              />
            <div>
              <h3 className="font-stretchFont text-5xl">{title}</h3>
              <p className="max-w-[384px] text-left my-4 font-light text-[12px]">{description}</p>
            </div>
          </div>
        </div>
      </Link>
      </div>
    </div>
  )
}